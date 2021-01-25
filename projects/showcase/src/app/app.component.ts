// Showcase application main component
// ----------------------------------------------------------------------------

// Import dependencies
import { Component } from '@angular/core';
import { routes } from '../../../ngx-showcase/src/public-api';

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
}
