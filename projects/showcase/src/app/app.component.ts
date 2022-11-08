// Showcase application main component
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { routes, MarkdownService, HighlightService } from '../../../ngx-showcase/src/public-api';

// Import highlight.js languages
import 'highlight.js';
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';

// Register markdown web-worker
MarkdownService.registerWorker(() => {
  return new Worker(new URL('../workers/markdown.worker', import.meta.url), {
    type: 'module',
  });
});
// Register highlighting web-worker
HighlightService.registerWorker(() => {
  return new Worker(new URL('../workers/highlight.worker', import.meta.url), {
    type: 'module',
  });
});

/**
 * Showcase application main component
 */
@Component({
  selector: 'app-root',
  template: '<ngx-showcase-app-page title="NGX SHOWCASE" [routes]="_routes"></ngx-showcase-app-page>',
  styleUrls: [],
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
