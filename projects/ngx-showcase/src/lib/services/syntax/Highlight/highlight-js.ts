// highlight.js library wrapper
// ----------------------------------------------------------------------------

// Import dependencies
import * as highlightjs from 'highlight.js';

/**
 * Registers a highlight.js language syntax
 * @param key Language key
 * @param language Language syntax definition
 */
export function registerLanguage(key: string | string[], language: any) {
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
export function render(syntax: string, language?: string): string {
  // Convert into explicitly specified language
  if (language) {
    return highlightjs.highlight(language, syntax).value;
  }

  // Auto detect target language
  else {
    return highlightjs.highlightAuto(syntax).value;
  }
}
