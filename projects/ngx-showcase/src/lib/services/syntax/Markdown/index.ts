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
  private static _md?: any;

  /**
   * Default MarkdownIt options
   */
  public static defaultOptions: TMarkdownOptions = {
    breaks: true,
    linkify: false,
    quotes: undefined,
  };

  constructor(protected _highlight: HighlightService) {
    // Instantiate MarkdownIt if not already instantiated
    if (!MarkdownService._md) {
      MarkdownService._md = new MarkdownIt();
    }
  }

  /**
   * Converts markdown syntax into HTML
   * @param syntax Markdown syntax to convert
   */
  public render(syntax: string, options?: TMarkdownOptions) {
    // Set options
    MarkdownService._md.set({
      // Non exposed options
      ...{
        highlight: this._highlight.render,
      },
      // User configured options
      ...options,
      // Default options
      ...MarkdownService.defaultOptions,
    });
    // Render
    return MarkdownService._md.render(syntax);
  }
}
