// Highlight pipe, Converts syntax of a known language into HTML
// ----------------------------------------------------------------------------

// Import dependencies
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
