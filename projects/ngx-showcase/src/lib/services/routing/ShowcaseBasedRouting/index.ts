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
  // Module = 'Module',
  Component = 'Component',
  Directive = 'Directive',
  Pipe = 'Pipe',
  // Injectable = 'Injectable',
  Service = 'Service',
  // Model = 'Model',
  class = 'class',
  function = 'function',
  custom = 'custom',
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
    artifact: new (...args: any[]) => any,
    artifactType: ShowcaseArtifactTypes.Component | ShowcaseArtifactTypes.Component | ShowcaseArtifactTypes.Pipe | ShowcaseArtifactTypes.Service,
    showcaseComponent: undefined | any,
    childRoutes?: Route[],
  ): Route;
  public static createRouteFromArtifact(
    artifact: new (...args: any[]) => any,
    artifactType: ShowcaseArtifactTypes.class,
    showcaseComponent: undefined | any,
    childRoutes?: Route[],
  ): Route;
  public static createRouteFromArtifact(
    artifact: (...args: any[]) => any,
    artifactType: ShowcaseArtifactTypes.function,
    showcaseComponent: undefined | any,
    childRoutes?: Route[],
  ): Route;
  public static createRouteFromArtifact(
    artifact: string,
    artifactType: ShowcaseArtifactTypes.custom,
    showcaseComponent: undefined | any,
    childRoutes?: Route[],
  ): Route;
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
      relativePath = artifact.name.replace(/component/gi, '');
      title = `<${artifact?.ɵcmp?.selectors?.[0]?.[0] || `${relativePath}`} />`;
    }
    // Extract directive path and title
    else if (artifactType === ShowcaseArtifactTypes.Directive) {
      relativePath = artifact.name.replace(/directive/gi, '');
      title = `<${artifact?.ɵcmp?.selectors?.[0]?.[0] || `${relativePath}`} />`;
    }
    // Extract pipe path and title
    else if (artifactType === ShowcaseArtifactTypes.Pipe) {
      relativePath = artifact.name.toLowerCase().replace(/pipe/gi, '');
      title = `| ${artifact?.ɵpipe?.name || artifact.name.replace(/pipe/gi, '')}`;
    }
    // Extract service path and title
    else if (artifactType === ShowcaseArtifactTypes.Service) {
      relativePath = artifact.name.toLowerCase().replace(/service/gi, '');
      title = `${artifact.name.replace(/service/gi, '')}`;
    }
    // Extract class path and title
    else if (artifactType === ShowcaseArtifactTypes.class && typeof artifact === 'function') {
      relativePath = artifact.name.toLowerCase();
      title = `${artifact.name}`;
    }
    // Extract function path and title
    else if (artifactType === ShowcaseArtifactTypes.function && typeof artifact === 'function') {
      relativePath = artifact.name.toLowerCase();
      title = `${artifact.name}`;
    }
    // Extract custom path and title
    else if (artifactType === ShowcaseArtifactTypes.custom && typeof artifact === 'string') {
      relativePath = artifact.toLowerCase().replace(/\s/g, '-');
      title = `${artifact}`;
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
