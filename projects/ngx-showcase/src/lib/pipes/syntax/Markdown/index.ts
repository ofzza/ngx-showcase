// Markdown pipe, Converts markdown syntax into HTML
// ----------------------------------------------------------------------------

// Import dependencies
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Pipe } from '@angular/core';
import { MarkdownService, TMarkdownOptions, HighlightService } from '../../../services';

// (Re)export showcase component
export * from './_showcase';

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
    return this._markdown.render(syntax || '', options);
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
   * @param pendingSyntax (Optional) Syntax to display while highlight is being processed
   *  - (Default) If string value, the value will be shown until replaced with highlighted result
   *  - If true, the original, non-highlighted value will be shown until replaced with highlighted result
   * @param errorSyntax (Optional) Syntax to display if highlight processing fails
   *  - (Default) If undefined, non-highlighted value will be shown in case highlighting fails
   *  - If string value, the value will be shown in case highlighting fails
   *  - If true, the error message returned by the highlighting service will be shown in case highlighting fails
   */
  public transform(
    syntax?: string | null,
    options?: TMarkdownOptions,
    pendingSyntax: true | string = true,
    errorSyntax: boolean | string = false,
  ): Observable<string> {
    return (
      this._markdown
        // Render
        .renderAsync(syntax || '', options)
        // Set initial value if set
        .pipe(startWith(pendingSyntax === true ? syntax || '' : pendingSyntax))
        // Resolve value or error
        .pipe(
          map(data => {
            if (data instanceof Error) {
              return errorSyntax === false ? syntax || '' : errorSyntax === true ? data.message : errorSyntax;
            } else {
              return data;
            }
          }),
        )
    );
  }
}
