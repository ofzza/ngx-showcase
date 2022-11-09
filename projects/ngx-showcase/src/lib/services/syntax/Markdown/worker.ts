// Markdown syntax worker, Provides conversion from markdown syntax into HTML syntax
// ----------------------------------------------------------------------------

// Import dependencies
import { render } from './markdown-it';
import { WorkerInvocationRequest, WorkerInvocationResponse } from '../workers';
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
    const data = JSON.parse(msg.data) as WorkerInvocationRequest;

    // Invoke "render" function and post result bact to main script
    if (data.method === 'render') {
      try {
        // Render
        const result = render(data.args.syntax, data.args.options, highlight),
          resultTotalSize = result.length;
        // Stream result
        if (data.streamPacketSize > 0) {
          // tslint:disable-next-line: no-shadowed-variable
          (function stream(data, result, streamedLength, resultTotalSize) {
            // Post message
            const packet = result.substr(0, data.streamPacketSize),
              res: WorkerInvocationResponse = {
                id: data.id,
                success: true,
                result: packet,
                streaming: [streamedLength + packet.length, resultTotalSize],
              };
            postMessage(JSON.stringify(res));
            // Remove sent section of result
            result = result.substr(packet.length);
            // Schedule next packet
            if (result.length) {
              setTimeout(() => {
                stream(data, result, streamedLength + packet.length, resultTotalSize);
              }, data.streamPacketDelay);
            }
          })(data, result, 0, resultTotalSize);
        }
        // ...or send in one piece
        else {
          const res: WorkerInvocationResponse = { id: data.id, success: true, result, streaming: false };
          postMessage(JSON.stringify(res));
        }
      } catch (err: any) {
        const errMessage = err.message.toString(),
          res: WorkerInvocationResponse = { id: data.id, success: false, result: errMessage, streaming: false };
        postMessage(JSON.stringify(res));
      }
    }
  });
}
