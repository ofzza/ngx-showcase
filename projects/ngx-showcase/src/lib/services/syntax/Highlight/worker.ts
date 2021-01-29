// Syntax highlighting worker, Highlights syntax of a known language
// ----------------------------------------------------------------------------

// Import dependencies
import { registerLanguage, render } from './highlight-js';

// Declare "postMessage", since including webworker tpe definitions causes conflicts
declare function postMessage(message: any): void;

/**
 * Initializes highlight service's web-worker
 */
export function initializeHighlightServiceWebWorker(): (key: string | string[], language: any) => void {
  // Listen for messages
  addEventListener('message', msg => {
    // Parse received data
    const data = JSON.parse(msg.data) as { id: number; method: string; args: Record<string, any>; streamBlockSize: number };

    // Invoke "render" function and post result bact to main script
    try {
      // Render
      const result = render(data.args.syntax, data.args.language);
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

  // Return a way to register languages
  return registerLanguage;
}
