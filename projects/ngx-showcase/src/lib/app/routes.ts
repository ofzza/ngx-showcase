// Register of all showcasing pages' routes
// ----------------------------------------------------------------------------

// Import dependencies
import { Route, ShowcaseBasedRouting, ShowcaseArtifactTypes } from './ngx-showcase-app.module';

// Import components
import { SyntaxAreaComponent, SyntaxAreaComponentShowcase } from './ngx-showcase-app.module';
import { SyntaxEditComponent, SyntaxEditComponentShowcase } from './ngx-showcase-app.module';
import { ShowcaseComponent, ShowcaseComponentShowcase } from './ngx-showcase-app.module';

// Import pipes
import { ExtractInnerSyntaxPipe, ExtractInnerSyntaxPipeShowcase } from './ngx-showcase-app.module';
import { FetchPipe, FetchPipeShowcase } from './ngx-showcase-app.module';
import { StringPipe, StringPipeShowcase } from './ngx-showcase-app.module';
import { MarkdownPipe, MarkdownAsyncPipe, MarkdownPipeShowcase } from './ngx-showcase-app.module';
import { HighlightPipe, HighlightAsyncPipe, HighlightPipeShowcase } from './ngx-showcase-app.module';

// Import services
import { CompileService, CompileServiceShowcase } from './ngx-showcase-app.module';
import { FetchService, FetchServiceShowcase } from './ngx-showcase-app.module';
import { StringService, StringServiceShowcase } from './ngx-showcase-app.module';
import { MarkdownService, MarkdownServiceShowcase } from './ngx-showcase-app.module';
import { HighlightService, HighlightServiceShowcase } from './ngx-showcase-app.module';

/**
 * Showcase pages' routes
 */
export const routes = [
  // Building a showcase application for your library
  new Route('Getting started', 'getting-started', undefined, {}, undefined, [
    // Creating a showcase application
    // Adding ngx-showcase into your showcase application
    // - Add NPM package
    // - Add application UI
    // - Add menu items and routes to relevant targets
    // - Configure angular to share resources to be consumed by the showcase
    // Optional advanced integration
    // - Configure syntax highlighting languages
    // - Add your own syntax highlighting languages
    // - Configure workers syntax processing services and pipes
  ]),
  // Utilities to help you write your showcase pages
  new Route('Utilities', 'utilities', undefined, {}, undefined, [
    // Components and directives
    // new Route('Components and Directives', 'components', undefined, {}, undefined, [
    //   // Syntax processing pipes
    //   new Route('Syntax processing', 'syntax', undefined, {}, undefined, [
    //     // Syntax area component
    //     ShowcaseBasedRouting.createRouteFromArtifact(SyntaxAreaComponent, ShowcaseArtifactTypes.Component, SyntaxAreaComponentShowcase),
    //     // Syntax edit component
    //     ShowcaseBasedRouting.createRouteFromArtifact(SyntaxEditComponent, ShowcaseArtifactTypes.Component, SyntaxEditComponentShowcase),
    //   ]),
    //   // Syntax processing pipes
    //   new Route('Demoing', 'demo', undefined, {}, undefined, [
    //     // Showcase component
    //     ShowcaseBasedRouting.createRouteFromArtifact(ShowcaseComponent, ShowcaseArtifactTypes.Component, ShowcaseComponentShowcase),
    //   ]),
    // ]),
    // Pipes
    new Route('Pipes', 'pipes', undefined, {}, undefined, [
      // Syntax processing pipes
      new Route('Resource processing', 'resource', undefined, {}, undefined, [
        // Fetch resource pipe
        ShowcaseBasedRouting.createRouteFromArtifact(FetchPipe, ShowcaseArtifactTypes.Pipe, FetchPipeShowcase),
        // String manipulation pipe
        ShowcaseBasedRouting.createRouteFromArtifact(StringPipe, ShowcaseArtifactTypes.Pipe, StringPipeShowcase),
      ]),
      // Syntax processing services
      new Route('Syntax processing', 'syntax', undefined, {}, undefined, [
        // Extract inner syntax pipe
        ShowcaseBasedRouting.createRouteFromArtifact(ExtractInnerSyntaxPipe, ShowcaseArtifactTypes.Pipe, ExtractInnerSyntaxPipeShowcase),
        // Highlight pipe
        ShowcaseBasedRouting.createRouteFromArtifact(HighlightPipe, ShowcaseArtifactTypes.Pipe, HighlightPipeShowcase),
        ShowcaseBasedRouting.createRouteFromArtifact(HighlightAsyncPipe, ShowcaseArtifactTypes.Pipe, HighlightPipeShowcase),
        // Markdown pipe
        ShowcaseBasedRouting.createRouteFromArtifact(MarkdownPipe, ShowcaseArtifactTypes.Pipe, MarkdownPipeShowcase),
        ShowcaseBasedRouting.createRouteFromArtifact(MarkdownAsyncPipe, ShowcaseArtifactTypes.Pipe, MarkdownPipeShowcase),
      ]),
    ]),
    // Services
    new Route('Services', 'services', undefined, {}, undefined, [
      // Runtime compilation service
      ShowcaseBasedRouting.createRouteFromArtifact(CompileService, ShowcaseArtifactTypes.Service, CompileServiceShowcase),
      // Syntax processing services
      new Route('Resource processing', 'resource', undefined, {}, undefined, [
        // Fetch service
        ShowcaseBasedRouting.createRouteFromArtifact(FetchService, ShowcaseArtifactTypes.Service, FetchServiceShowcase),
        // String manipulation service
        ShowcaseBasedRouting.createRouteFromArtifact(StringService, ShowcaseArtifactTypes.Service, StringServiceShowcase),
      ]),
      // Syntax processing services
      new Route('Syntax processing', 'syntax', undefined, {}, undefined, [
        // Highlight service
        ShowcaseBasedRouting.createRouteFromArtifact(HighlightService, ShowcaseArtifactTypes.Service, HighlightServiceShowcase),
        // Markdown service
        ShowcaseBasedRouting.createRouteFromArtifact(MarkdownService, ShowcaseArtifactTypes.Service, MarkdownServiceShowcase),
      ]),
    ]),
  ]),
];
