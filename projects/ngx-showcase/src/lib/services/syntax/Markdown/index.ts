// Markdown syntax service, Provides conversion from markdown syntax into HTML syntax
// ----------------------------------------------------------------------------

// Import dependencies
import { Observable, Subscriber } from 'rxjs';
import { Injectable } from '@angular/core';
import { TMarkdownOptions, render } from './markdown-it';
import { HighlightService } from '../Highlight';

// (Re)export types and worker
export { TMarkdownOptions } from './markdown-it';
export * from './worker';

// (Re)export showcase component
export * from './_showcase';

/**
 * Markdown syntax service, Provides conversion from markdown syntax into HTML syntax
 */
@Injectable()
export class MarkdownService {
  /**
   * Holds web-worker factory callback
   */
  private static _workerFactory?: () => Worker;

  /**
   * Registers a web-worker factory
   * @param workerFactory Factory callback function used to create a web-worker
   */
  public static registerWorker(workerFactory: () => Worker) {
    MarkdownService._workerFactory = workerFactory;
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

  constructor(protected _highlight: HighlightService) {
    // If using web-workers, instantiate a web-worker
    if (MarkdownService._workerFactory) {
      try {
        this._worker = MarkdownService._workerFactory();
        this._worker.addEventListener('message', this.processAsyncResult.bind(this));
      } catch (_) {}
    }
  }

  /**
   * Converts markdown syntax into HTML
   * @param syntax Markdown syntax to convert
   * @param options (Optional) Markdown rendering options:
   *  - trim: If syntax should be trimmed before processing
   *  ... trimming will remove whitespace and the start and end of syntax
   *  ... trimming will remove minimum common indentation whitespace from all lines
   *  - breaks: Convert line-breaks into <br /> elements
   *  - linkify: Convert URLs to links
   *  - quotes: Replacement quotes
   */
  public render(syntax: string, options?: TMarkdownOptions): string {
    return render(syntax, options, this._highlight);
  }

  /**
   * Converts markdown syntax into HTML asynchronously using a web-worker
   * @param syntax Markdown syntax to convert
   * @param options (Optional) Markdown rendering options:
   *  - trim: If syntax should be trimmed before processing
   *  ... trimming will remove whitespace and the start and end of syntax
   *  ... trimming will remove minimum common indentation whitespace from all lines
   *  - breaks: Convert line-breaks into <br /> elements
   *  - linkify: Convert URLs to links
   *  - quotes: Replacement quotes
   */
  public renderAsync(syntax: string, options?: TMarkdownOptions): Observable<string | Error> {
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
            args: { syntax, options },
            streamBlockSize: 1_000_000,
          }),
        );
      }

      // If service-worker not available, execute sync render
      else {
        setTimeout(() => {
          try {
            const result = render(syntax, options, this._highlight);
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
