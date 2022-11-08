// Application menu component, Creates a menu from routes
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NestedTreeControl } from '@angular/cdk/tree';
import { ArrayDataSource } from '@angular/cdk/collections';
import { Route } from '../../../services';

/**
 * Application menu component, Creates a menu from routes
 */
@Component({
  selector: 'ngx-showcase-app-menu',
  templateUrl: './index.html',
  styleUrls: ['./style.scss'],
})
export class AppMenuComponent {
  /**
   * Holds page group's pages structure and definitions
   */
  @Input()
  public routes: Route[] = [];

  /**
   * Main menu links tree control
   */
  public _tree = new NestedTreeControl<Route>(node => node.childRoutes);
  /**
   * Main menu links tree data source
   */
  public get _treeDataSource() {
    return new ArrayDataSource(this.routes);
  }
  /**
   * Checks if route has children
   */
  public _treeHasChildren = (_: number, route: Route) => route.childRoutes !== undefined && !!route.childRoutes.length;

  constructor(private _router: Router) {
    // On route change
    this._router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        // Flatten all pages
        const routes = flattenRoutes(this.routes);
        // (Un)mark all routes
        routes.forEach(route => (route.info.active = false));
        // Expand and mark active route
        let selected = routes.find(route => `/${route.fullPath.join('/')}` === e.url);
        while (selected?.parentRoute) {
          selected.info.active = selected.parentRoute.info.active = true;
          this._tree.expand((selected = selected.parentRoute));
        }
      }
    });
  }
}

/**
 * Converts array of routes and their children into a flat array of routes
 * @param routes Routes to flatten
 */
function flattenRoutes(routes: Route[]): Route[] {
  // Initialize flattened routes
  const flatRoutes: Route[] = [];
  // Flatten routes
  routes.forEach(route => {
    // Register route
    flatRoutes.push(route);
    // Register route's children
    if (route.childRoutes) {
      flatRoutes.push(...flattenRoutes(route.childRoutes));
    }
  });
  // Return flattened routes
  return flatRoutes;
}
