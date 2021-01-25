// ShowcaseBasedRouting service
// Provides mechanisms to quickly generate routing based on components/directives/pipes/services and other artifacts that
// Which need to be represented by generated routes
// ----------------------------------------------------------------------------

// Import dependencies
import { Injectable } from '@angular/core';
import { Route } from '../Route';

/**
 * Types of artifacts which can be represented by routes
 */
export enum ShowcaseArtifactTypes {
  Module = 'Module',
  Component = 'Component',
  Directive = 'Directive',
  Pipe = 'Pipe',
  Injectable = 'Injectable',
  Service = 'Service',
  Model = 'Model',
}

/**
 * ShowcaseBasedRouting service
 * Provides mechanisms to quickly generate routing based on components/directives/pipes/services and other artifacts that
 * Which need to be represented by generated routes
 */
export class ShowcaseBasedRouting {
  /**
   * Creates a route based of the artifact provided
   * @param artifact Artifact to create a route for
   * @param artifactType Artifact type
   * @param showcaseComponent Component to load when route is hit
   * @param childRoutes Child routes Child routes nested within created route
   */
  public static createRouteFromArtifact(
    artifact: any,
    artifactType: ShowcaseArtifactTypes,
    showcaseComponent: undefined | any,
    childRoutes: Route[] = [],
  ): Route {
    // Extract route title and path from artifact
    let relativePath: string, title: string;
    // Extract component path and title
    if (artifactType === ShowcaseArtifactTypes.Component) {
      relativePath = 'component-demo';
      title = 'Demo Component';
    }
    // Extract directive path and title
    else if (artifactType === ShowcaseArtifactTypes.Directive) {
      relativePath = 'directive-demo';
      title = 'Demo Directive';
    }
    // Extract pipe path and title
    else if (artifactType === ShowcaseArtifactTypes.Pipe) {
      relativePath = 'pipe-demo';
      title = 'Demo Pipe';
    }
    // Extract pipe path and title
    else if (artifactType === ShowcaseArtifactTypes.Injectable) {
      relativePath = 'injectable-demo';
      title = 'Demo Injectable';
    }
    // Artifact type not supported
    else {
      throw new Error(`Artifact type of "${artifactType}" not yet supported!`);
    }

    // Return composed route
    return new Route(title, relativePath, showcaseComponent, {}, undefined, childRoutes);
  }

  /**
   * Generates a RouterModule format of routes
   * @param routes Route definitions to generate RouterModule format routes from
   */
  public static generateRoutingModuleRoutes(routes: Route[]): any[] {
    // Initialize router routes
    const routerRoutes: any[] = [];
    // Convert routes and their children into router routes
    routes.forEach(route => {
      // Convert route
      if (route.component) {
        routerRoutes.push({ path: route.fullPath.join('/'), component: route.component });
      }
      // Convert route child routes
      if (route.childRoutes) {
        routerRoutes.push(...ShowcaseBasedRouting.generateRoutingModuleRoutes(route.childRoutes));
      }
    });
    // Return router routes
    return routerRoutes;
  }
}
