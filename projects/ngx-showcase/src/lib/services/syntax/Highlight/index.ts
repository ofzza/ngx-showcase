// Syntax highlighting service, Highlights syntax of a known language
// ----------------------------------------------------------------------------

// Import dependencies
import * as highlightjs from 'highlight.js';
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
      key.forEach(k => highlightjs.registerLanguage(k, language));
    }
    // Register language
    else {
      highlightjs.registerLanguage(key, language);
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
      return highlightjs.highlight(language, syntax).value;
    }

    // Auto detect target language
    else {
      return highlightjs.highlightAuto(syntax).value;
    }
  }
}
