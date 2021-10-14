// Markdown syntax service, Provides conversion from markdown syntax into HTML syntax
// ----------------------------------------------------------------------------

// Import dependencies
import { Observable, Subscriber, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { TMarkdownOptions, render } from './markdown-it';
import { TWorkerInvocationRequest, TWorkerInvocationResponse } from '../workers';
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
  private _pendingAsyncQueue: Record<
    number,
    {
      subscriber: Subscriber<string | Error>;
      monitor?: (res: TWorkerInvocationResponse | Error) => void;
    }
  > = {};

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
  public render(syntax?: string | null, options?: TMarkdownOptions): string {
    // If no syntax, return not-rendered
    if (!syntax) {
      return syntax || '';
    }
    // Convert into HTML representation
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
   * @param streamPacketSize (Optional) If set to larger than 0, will stream result in packets of requested size
   * (allows for main thread not to get blocked processing a single large packet)
   * @param streamPacketDelay (Optional) If streaming packets, sets delay between packets
   * (allows for main thread not to get blocked by too many packets)
   * @param streamMonitorCallback (Optional) Callback invoked with every streamed package as it is streamed
   */
  public renderAsync(
    syntax?: string | null,
    options?: TMarkdownOptions,
    streamPacketSize: number = 0,
    streamPacketDelay: number = 1,
    streamMonitorCallback?: (res: TWorkerInvocationResponse | Error) => void,
  ): Observable<string | Error> {
    // If no syntax, return not-rendered
    if (!syntax) {
      return of<string>(syntax || '');
    }
    // Convert into a observable to be resolved asynchronously
    return new Observable<string | Error>(subscriber => {
      // If using a web-worker, invoke a render using web-worker
      if (this._worker) {
        // Register to pending messages queue
        const id = this._idNext++;
        this._pendingAsyncQueue[id] = { subscriber, monitor: streamMonitorCallback };

        // Post message to web-worker
        const req: TWorkerInvocationRequest = {
          id,
          method: 'render',
          args: { syntax, options },
          streamPacketSize,
          streamPacketDelay,
        };
        this._worker.postMessage(JSON.stringify(req));
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
    const res = JSON.parse(msg.data) as TWorkerInvocationResponse;

    // Check if message expected
    if (!this._pendingAsyncQueue[res.id]) {
      throw new Error('Received unexpected message from web-worker!');
    }

    // Handle successful execution
    if (res.success) {
      // If streaming, decorate cache string to signify streaming complete or not complete
      const isStreamComplete = !res.streaming || res.streaming[0] === res.streaming[1];
      // Resolve result
      this._pendingAsyncQueue[res.id].subscriber.next(res.result);
      // If monitoring stream, invoke monitor callback
      this._pendingAsyncQueue[res.id].monitor?.(res);
      // Check if finished streaming
      if (isStreamComplete) {
        this._pendingAsyncQueue[res.id].subscriber.complete();
        delete this._pendingAsyncQueue[res.id];
      }
    }

    // Handle failed execution
    else {
      // Throw error to subscriber
      const err = new Error(res.result);
      this._pendingAsyncQueue[res.id].subscriber.error(err);
      // If monitoring stream, invoke monitor callback
      this._pendingAsyncQueue[res.id].monitor?.(err);
    }
  }
}
