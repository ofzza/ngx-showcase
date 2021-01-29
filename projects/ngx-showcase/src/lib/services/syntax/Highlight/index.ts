// Syntax highlighting service, Highlights syntax of a known language
// ----------------------------------------------------------------------------

// Import dependencies
import { Observable, Subscriber } from 'rxjs';
import { Injectable } from '@angular/core';
import { registerLanguage, render } from './highlight-js';

// (Re)export worker
export * from './worker';

// (Re)export showcase component
export * from './_showcase';

/**
 * Syntax highlighting service, Highlights syntax of a known language
 */
@Injectable()
export class HighlightService {
  /**
   * Holds web-worker factory callback
   */
  private static _workerFactory?: () => Worker;

  /**
   * Registers a web-worker factory
   * @param workerFactory Factory callback function used to create a web-worker
   */
  public static registerWorker(workerFactory: () => Worker) {
    HighlightService._workerFactory = workerFactory;
  }

  /**
   * Holds this instance's web-worker
   */
  private _worker?: Worker;

  /**
   * Holds unique ID to be used for next message to web-worker
   */
  private _idNext = 0;

  /**
   * Holds promises awaiting resolution/rejection by their unique message IDs
   */
  private _pendingAsyncQueue: Record<number, { subscriber: Subscriber<string | Error>; cache?: string }> = {};

  constructor() {
    // If using web-workers, instantiate a web-worker
    if (HighlightService._workerFactory) {
      try {
        this._worker = HighlightService._workerFactory();
        this._worker.addEventListener('message', this.processAsyncResult.bind(this));
      } catch (_) {}
    }
  }

  /**
   * Registers a highlight.js language syntax
   * @param key Language key
   * @param language Language syntax definition
   */
  public registerLanguage(key: string | string[], language: any) {
    // Register language with the local instance of highlight.js
    registerLanguage(key, language);
  }

  /**
   * Converts a language code syntax into highlighted HTML
   * @param syntax Language code syntax to convert
   * @param language Language to convert into
   */
  public render(syntax: string, language?: string): string {
    // Convert into explicitly specified language
    return render(syntax, language);
  }

  /**
   * Converts a language code syntax into highlighted HTML asynchronously using a web-worker
   * @param syntax Language code syntax to convert
   * @param language Language to convert into
   */
  public renderAsync(syntax: string, language?: string): Observable<string | Error> {
    return new Observable<string | Error>(subscriber => {
      // If using a web-worker, invoke a render using web-worker
      if (this._worker) {
        // Register to pending messages queue
        const id = this._idNext++;
        this._pendingAsyncQueue[id] = { subscriber };

        // Post message to web-worker
        this._worker.postMessage(
          JSON.stringify({
            id,
            method: 'render',
            args: { syntax, language },
            streamBlockSize: 1_000_000,
          }),
        );
      }

      // If service-worker not available, execute sync render
      else {
        setTimeout(() => {
          try {
            const result = render(syntax, language);
            subscriber.next(result);
            subscriber.complete();
          } catch (err) {
            subscriber.error(err);
          }
        });
      }
    });
  }

  /**
   * Processes response messages from web-worker
   * @param msg Response message
   */
  private processAsyncResult(msg: MessageEvent<any>) {
    // Parse received data
    const data = JSON.parse(msg.data) as { id: number; success: boolean; result: string };

    // Check if message expected
    if (!this._pendingAsyncQueue[data.id]) {
      throw new Error('Received unexpected message from web-worker!');
    }

    // Handle successful execution
    if (data.success) {
      // Append to cache
      const cache = (this._pendingAsyncQueue[data.id].cache =
        (this._pendingAsyncQueue[data.id].cache ? this._pendingAsyncQueue[data.id].cache : '') + data.result);
      // Resolve result
      this._pendingAsyncQueue[data.id].subscriber.next(cache);
      // Check if finished streaming
      if (data.result === '') {
        this._pendingAsyncQueue[data.id].subscriber.complete();
        delete this._pendingAsyncQueue[data.id];
      }
    }

    // Handle failed execution
    else {
      this._pendingAsyncQueue[data.id].subscriber.error(new Error(data.result));
    }
  }
}
