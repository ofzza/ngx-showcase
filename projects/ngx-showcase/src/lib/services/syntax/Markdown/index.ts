// Markdown syntax service, Provides conversion from markdown syntax into HTML syntax
// ----------------------------------------------------------------------------

// Import dependencies
import * as MarkdownIt from 'markdown-it';
import { Injectable } from '@angular/core';
import { HighlightService } from '../Highlight';

// (Re)export showcase component
export * from './_showcase';

/**
 * MarkdownIt options type
 */
export type TMarkdownOptions = {
  // If syntax should be trimmed before processing
  // ... trimming will remove whitespace and the start and end of syntax
  // ... trimming will remove minimum common indentation whitespace from all lines
  trim?: boolean;
  // Convert line-breaks into <br /> elements
  breaks?: boolean;
  // Convert URLs to links
  linkify?: boolean;
  // Replacement quotes
  quotes?: string | string[];
};

/**
 * Markdown syntax service, Provides conversion from markdown syntax into HTML syntax
 */
@Injectable()
export class MarkdownService {
  /**
   * MarkdownIt instance
   */
  private static _markdownit?: any;

  /**
   * Default MarkdownIt options
   */
  public static defaultOptions: TMarkdownOptions = {
    trim: true,
    breaks: true,
    linkify: false,
    quotes: undefined,
  };

  constructor(protected _highlight: HighlightService) {
    // Instantiate MarkdownIt if not already instantiated
    if (!MarkdownService._markdownit) {
      MarkdownService._markdownit = new MarkdownIt();
    }
  }

  /**
   * Converts markdown syntax into HTML
   * @param syntax Markdown syntax to convert
   */
  public render(syntax: string, options?: TMarkdownOptions) {
    // Set options
    const margedOptions = {
      // Non exposed options
      ...{
        highlight: this._highlight.render,
      },
      // User configured options
      ...options,
      // Default options
      ...MarkdownService.defaultOptions,
    };
    MarkdownService._markdownit.set(margedOptions);
    // Trim
    if (margedOptions.trim) {
      const lines = syntax.replace(/\t/g, '  ').split('\n');
      const indentationDepth = lines.reduce((min, line) => {
        // Test min indentation against a proper line
        if (line && line.trim()) {
          const indentation = line.length - line.trimStart().length;
          return indentation < min ? indentation : min;
        }
        // ... or keepo current indentation for inproper lines
        else {
          return min;
        }
      }, Number.MAX_SAFE_INTEGER);
      syntax = lines.map(line => line.substr(indentationDepth)).join('\n');
    }
    // Render
    return MarkdownService._markdownit.render(syntax);
  }
}
