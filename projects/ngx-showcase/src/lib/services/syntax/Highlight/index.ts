// Syntax highlighting service, Highlights syntax of a known language
// ----------------------------------------------------------------------------

// Import dependencies
import * as HighlightJs from 'highlight.js';
import { Injectable } from '@angular/core';

// (Re)export showcase component
export * from './_showcase';

/**
 * Syntax highlighting service, Highlights syntax of a known language
 */
@Injectable()
export class HighlightService {
  /**
   * Registers a highlight.js language syntax
   * @param key Language key
   * @param language Language syntax definition
   */
  public registerLanguage(key: string | string[], language: any) {
    // Register language under multiple keys
    if (key instanceof Array) {
      key.forEach(k => HighlightJs.registerLanguage(k, language));
    }
    // Register language
    else {
      HighlightJs.registerLanguage(key, language);
    }
  }

  /**
   * Converts a language code syntax into highlighted HTML
   * @param syntax Language code syntax to convert
   * @param language Language to convert into
   */
  public render(syntax: string, language?: string): string {
    // Convert into explicitly specified language
    if (language) {
      return HighlightJs.highlight(language, syntax).value;
    }

    // Auto detect target language
    else {
      return HighlightJs.highlightAuto(syntax).value;
    }
  }
}
