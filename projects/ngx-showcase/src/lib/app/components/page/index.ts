// Application page shell component, Creates a page shell with fully router menu
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, Input } from '@angular/core';
import { Route } from '../../../services';

/**
 * Application page shell component, Creates a menu from routes
 */
@Component({
  selector: 'ngx-showcase-app-page',
  templateUrl: './index.html',
  styleUrls: ['./style.scss'],
})
export class AppPageComponent {
  /**
   * Holds page group's pages structure and definitions
   */
  @Input()
  public routes: Route[] = [];

  /**
   * Holds page group's title
   */
  @Input()
  public title = 'Showcase';
}
