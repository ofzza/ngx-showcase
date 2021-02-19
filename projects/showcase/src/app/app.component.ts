// Showcase application main component
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { routes, MarkdownService, HighlightService } from '../../../ngx-showcase/src/public-api';

// Import highlight.js languages
import * as xml from 'highlight.js/lib/languages/xml';
import * as javascript from 'highlight.js/lib/languages/javascript';
import * as css from 'highlight.js/lib/languages/css';

// Register markdown web-worker
MarkdownService.registerWorker(() => {
  return new Worker('../workers/markdown.worker', {
    type: 'module',
  });
});
// Register highlighting web-worker
HighlightService.registerWorker(() => {
  return new Worker('../workers/highlight.worker', {
    type: 'module',
  });
});

/**
 * Showcase application main component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   * Showcase registered routes
   */
  public _routes = routes;

  constructor(highlight: HighlightService) {
    // Register highlighting languages
    highlight.registerLanguage(['xml', 'html'], xml);
    highlight.registerLanguage(['js', 'javascript'], javascript);
    highlight.registerLanguage(['css'], css);
  }
}
