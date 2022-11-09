// Highlight pipe, Converts syntax of a known language into HTML
// ----------------------------------------------------------------------------

// Import dependencies
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pipe } from '@angular/core';
import { HighlightService, WorkerInvocationResponse } from '../../../services';

/**
 * Highlight pipe, Converts syntax of a known language into HTML
 */
@Pipe({ name: 'highlight' })
export class HighlightPipe {
  constructor(private _highlight: HighlightService) {}

  /**
   * Converts syntax of a known language into HTML
   * @param syntax Language code syntax to convert
   */
  public transform(syntax?: string | null, lang?: string): string {
    return this._highlight.render(syntax, lang);
  }
}

/**
 * Highlight pipe, Converts syntax of a known language into HTML asynchronously using a web-worker
 */
@Pipe({ name: 'highlightAsync' })
export class HighlightAsyncPipe {
  constructor(private _highlight: HighlightService) {}

  /**
   * Converts syntax of a known language into HTML asynchronously using a web-worker
   * @param syntax Language code syntax to convert
   * @param lang (Optional) Language to highlight as
   * @param streamPacketSize (Optional) If set to larger than 0, will stream result in packets of requested size
   * (allows for main thread not to get blocked processing a single large packet)
   * @param streamPacketDelay (Optional) If streaming packets, sets delay between packets
   * (allows for main thread not to get blocked by too many packets)
   * @param streamMonitorCallback (Optional) Callback invoked with every streamed package as it is streamed
   */
  public transform(
    syntax?: string | null,
    lang?: string,
    streamPacketSize: number = 0,
    streamPacketDelay: number = 1,
    streamMonitorCallback?: (res: WorkerInvocationResponse | Error) => void,
  ): Observable<string> {
    return (
      this._highlight
        // Render
        .renderAsync(syntax || '', lang, streamPacketSize, streamPacketDelay, streamMonitorCallback)
        // Resolve value or error
        .pipe(map(data => (data instanceof Error ? '' : data)))
    );
  }
}
