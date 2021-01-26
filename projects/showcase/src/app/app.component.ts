// Showcase application main component
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { routes, HighlightService } from '../../../ngx-showcase/src/public-api';

// Import highlight.js languages
import * as xml from 'highlight.js/lib/languages/xml';
import * as javascript from 'highlight.js/lib/languages/javascript';

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
    highlight.registerLanguage('xml', xml);
    highlight.registerLanguage(['js', 'javascript'], javascript);
  }
}
