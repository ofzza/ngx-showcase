// markdown-it library wrapper
// ----------------------------------------------------------------------------

// Import dependencies
import * as MarkdownIt from 'markdown-it';
import { HighlightService } from '../Highlight';

/**
 * MarkdownIt instance
 */
const _markdownit = new MarkdownIt();

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
 * Default MarkdownIt options
 */
const defaultOptions: TMarkdownOptions = {
  trim: true,
  breaks: true,
  linkify: false,
  quotes: undefined,
};

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
 * @param highlight (Optional) Instance of the Highlighting service
 */
export function render(syntax: string, options?: TMarkdownOptions, highlight?: HighlightService) {
  // Set options
  const margedOptions = {
    // Non exposed options
    ...(highlight
      ? {
          highlight: highlight.render,
        }
      : {}),
    // User configured options
    ...options,
    // Default options
    ...defaultOptions,
  };
  _markdownit.set(margedOptions);
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
  return _markdownit.render(syntax);
}
