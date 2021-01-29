// Markdown syntax worker, Provides conversion from markdown syntax into HTML syntax
// ----------------------------------------------------------------------------

// Import dependencies
import { render } from './markdown-it';
import { HighlightService } from '../Highlight';

// Declare "postMessage", since including webworker tpe definitions causes conflicts
declare function postMessage(message: any): void;

/**
 * Initializes highlight service's web-worker
 */
export function initializeMarkdownServiceWebWorker(highlight?: HighlightService) {
  // Listen for messages
  addEventListener('message', msg => {
    // Parse received data
    const data = JSON.parse(msg.data) as { id: number; method: string; args: Record<string, any>; streamBlockSize: number };

    // Invoke "render" function and post result bact to main script
    try {
      // Render
      const result = render(data.args.syntax, data.args.options, highlight);
      // Stream result
      for (let i = 0; i + 1 < result.length; i += data.streamBlockSize) {
        postMessage(JSON.stringify({ id: data.id, success: true, result: result.substr(i, data.streamBlockSize) }));
      }
      // Finish streaming
      postMessage(JSON.stringify({ id: data.id, success: true, result: '' }));
    } catch (err) {
      postMessage(JSON.stringify({ id: data.id, success: false, result: err.message.toString() }));
    }
  });
}
