// Markdown pipe, Converts markdown syntax into HTML
// ----------------------------------------------------------------------------

// Import dependencies
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pipe } from '@angular/core';
import { MarkdownService, TMarkdownOptions, WorkerInvocationResponse } from '../../../services';

/**
 * Markdown pipe, Converts markdown syntax into HTML
 */
@Pipe({ name: 'markdown' })
export class MarkdownPipe {
  constructor(private _markdown: MarkdownService) {}

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
  public transform(syntax?: string | null, options?: TMarkdownOptions): string {
    return this._markdown.render(syntax, options);
  }
}

/**
 * Markdown pipe, Converts markdown syntax into HTML asynchronously using a web-worker
 */
@Pipe({ name: 'markdownAsync' })
export class MarkdownAsyncPipe {
  constructor(private _markdown: MarkdownService) {}

  /**
   * Converts syntax of a known language into HTML asynchronously using a web-worker
   * @param syntax Language code syntax to convert
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
  public transform(
    syntax?: string | null,
    options?: TMarkdownOptions,
    streamPacketSize: number = 0,
    streamPacketDelay: number = 1,
    streamMonitorCallback?: (res: WorkerInvocationResponse | Error) => void,
  ): Observable<string> {
    return (
      this._markdown
        // Render
        .renderAsync(syntax || '', options, streamPacketSize, streamPacketDelay, streamMonitorCallback)
        // Resolve value or error
        .pipe(map(data => (data instanceof Error ? '' : data)))
    );
  }
}
