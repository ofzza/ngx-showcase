// Highlight pipe, Converts syntax of a known language into HTML
// ----------------------------------------------------------------------------

// Import dependencies
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Pipe } from '@angular/core';
import { HighlightService } from '../../../services';

// (Re)export showcase component
export * from './_showcase';

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
  public transform(syntax: string, lang?: string): string {
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
   * @param pendingSyntax (Optional) Syntax to display while highlight is being processed
   *  - (Default) If string value, the value will be shown until replaced with highlighted result
   *  - If true, the original, non-highlighted value will be shown until replaced with highlighted result
   * @param errorSyntax (Optional) Syntax to display if highlight processing fails
   *  - (Default) If undefined, non-highlighted value will be shown in case highlighting fails
   *  - If string value, the value will be shown in case highlighting fails
   *  - If true, the error message returned by the highlighting service will be shown in case highlighting fails
   */
  public transform(syntax?: string | null, lang?: string, pendingSyntax: true | string = true, errorSyntax: boolean | string = false): Observable<string> {
    return (
      this._highlight
        // Render
        .renderAsync(syntax || '', lang)
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
