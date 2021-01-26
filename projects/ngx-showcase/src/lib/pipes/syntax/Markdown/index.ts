// Markdown pipe, Converts markdown syntax into HTML
// ----------------------------------------------------------------------------

// Import dependencies
import { Pipe } from '@angular/core';
import { MarkdownService, TMarkdownOptions } from '../../../services';

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
   */
  public transform(syntax: string, options?: TMarkdownOptions): string {
    return this._markdown.render(syntax, options);
  }
}
