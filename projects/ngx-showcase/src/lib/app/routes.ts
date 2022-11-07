// Register of all showcasing pages' routes
// ----------------------------------------------------------------------------

// Import dependencies
import { Route, ShowcaseBasedRouting, ShowcaseArtifactTypes } from '../services';

// Import components
import { SyntaxAreaComponent } from '../components';
import { SyntaxAreaComponentShowcase } from './ngx-showcase-app.module';
import { SyntaxEditComponent } from '../components';
import { SyntaxEditComponentShowcase } from './ngx-showcase-app.module';
import { ShowcaseComponent } from '../components';
import { ShowcaseComponentShowcase } from './ngx-showcase-app.module';

// Import pipes
import { ExtractInnerSyntaxPipe, ExtractInnerSyntaxPipeShowcase } from '../pipes';
import { FetchPipe, FetchPipeShowcase } from '../pipes';
import { StringPipe, StringPipeShowcase } from '../pipes';
import { MarkdownPipe, MarkdownAsyncPipe, MarkdownPipeShowcase } from '../pipes';
import { HighlightPipe, HighlightAsyncPipe, HighlightPipeShowcase } from '../pipes';

// Import services
import { CompileService, CompileServiceShowcase } from '../services';
import { StringService, StringServiceShowcase } from '../services';
import { MarkdownService, MarkdownServiceShowcase } from '../services';
import { HighlightService, HighlightServiceShowcase } from '../services';

/**
 * Showcase pages' routes
 */
export const routes = [
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
    new Route('Syntax processing', 'syntax', undefined, {}, undefined, [
      // Extract inner syntax pipe
      ShowcaseBasedRouting.createRouteFromArtifact(ExtractInnerSyntaxPipe, ShowcaseArtifactTypes.Pipe, ExtractInnerSyntaxPipeShowcase),
      // Fetch resource pipe
      ShowcaseBasedRouting.createRouteFromArtifact(FetchPipe, ShowcaseArtifactTypes.Pipe, FetchPipeShowcase),
      // String manipulation pipe
      ShowcaseBasedRouting.createRouteFromArtifact(StringPipe, ShowcaseArtifactTypes.Pipe, StringPipeShowcase),
      // Markdown pipe
      ShowcaseBasedRouting.createRouteFromArtifact(MarkdownPipe, ShowcaseArtifactTypes.Pipe, MarkdownPipeShowcase),
      ShowcaseBasedRouting.createRouteFromArtifact(MarkdownAsyncPipe, ShowcaseArtifactTypes.Pipe, MarkdownPipeShowcase),
      // Highlight pipe
      ShowcaseBasedRouting.createRouteFromArtifact(HighlightPipe, ShowcaseArtifactTypes.Pipe, HighlightPipeShowcase),
      ShowcaseBasedRouting.createRouteFromArtifact(HighlightAsyncPipe, ShowcaseArtifactTypes.Pipe, HighlightPipeShowcase),
    ]),
  ]),
  // Services
  new Route('Services', 'services', undefined, {}, undefined, [
    // Syntax processing services
    // new Route('Runtime compilation', 'compilation', undefined, {}, undefined, [
    //   // Compile service
    //   ShowcaseBasedRouting.createRouteFromArtifact(CompileService, ShowcaseArtifactTypes.Service, CompileServiceShowcase),
    // ]),
    // Syntax processing services
    new Route('Resource processing', 'resource', undefined, {}, undefined, [
      // String manipulation service
      ShowcaseBasedRouting.createRouteFromArtifact(StringService, ShowcaseArtifactTypes.Service, StringServiceShowcase),
    ]),
    // Syntax processing services
    new Route('Syntax processing', 'syntax', undefined, {}, undefined, [
      // Markdown service
      ShowcaseBasedRouting.createRouteFromArtifact(MarkdownService, ShowcaseArtifactTypes.Service, MarkdownServiceShowcase),
      // Highlight service
      ShowcaseBasedRouting.createRouteFromArtifact(HighlightService, ShowcaseArtifactTypes.Service, HighlightServiceShowcase),
    ]),
  ]),
];
