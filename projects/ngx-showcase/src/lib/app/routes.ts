// Register of all showcasing pages' routes
// ----------------------------------------------------------------------------

// Import dependencies
import { Component, Directive, Injectable } from '@angular/core';
import { Route, ShowcaseBasedRouting, ShowcaseArtifactTypes } from '../services';

// Temp, dummy stuff declarations
@Component({
  template: 'Dummy component',
  styles: [],
})
class DummyComponent {}

@Directive({})
class DummyDirective {}

@Injectable()
class DummyInjectable {}

@Component({
  template: 'SHOWCASE',
  styles: [],
})
class ShowcaseComponent {}

// Showcase pages' routes
export const routes = [
  // Components and directives
  new Route('Components and Directives', 'components', undefined, {}, undefined, [
    // Dummy component
    ShowcaseBasedRouting.createRouteFromArtifact(DummyComponent, ShowcaseArtifactTypes.Component, ShowcaseComponent),
    // Dummy directive
    ShowcaseBasedRouting.createRouteFromArtifact(DummyDirective, ShowcaseArtifactTypes.Directive, ShowcaseComponent),
  ]),

  // Pipes
  // new Route('Pipes', 'pipes', undefined, {}, undefined, []),

  // Services
  new Route('Services', 'services', undefined, {}, undefined, [
    // Dummy injectable
    ShowcaseBasedRouting.createRouteFromArtifact(DummyInjectable, ShowcaseArtifactTypes.Injectable, ShowcaseComponent),
  ]),
];
