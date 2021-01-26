// Register of all showcasing pages' routes
// ----------------------------------------------------------------------------

// Import dependencies
import { Route, ShowcaseBasedRouting, ShowcaseArtifactTypes } from '../services';

// Import components
import { SyntaxAreaComponent, SyntaxAreaComponentShowcase } from '../components';

// Import pipes
import { ExtractInnerSyntaxPipe, ExtractInnerSyntaxPipeShowcase } from '../pipes';
import { MarkdownPipe, MarkdownPipeShowcase } from '../pipes';
import { HighlightPipe, HighlightPipeShowcase } from '../pipes';

// Import services
import { MarkdownService, MarkdownServiceShowcase } from '../services';
import { HighlightService, HighlightServiceShowcase } from '../services';

/**
 * Showcase pages' routes
 */
export const routes = [
  // Components and directives
  new Route('Components and Directives', 'components', undefined, {}, undefined, [
    // Syntax processing pipes
    new Route('Syntax processing', 'syntax', undefined, {}, undefined, [
      // Syntax area component
      ShowcaseBasedRouting.createRouteFromArtifact(SyntaxAreaComponent, ShowcaseArtifactTypes.Component, SyntaxAreaComponentShowcase),
    ]),
  ]),
  // Pipes
  new Route('Pipes', 'pipes', undefined, {}, undefined, [
    // Syntax processing pipes
    new Route('Syntax processing', 'syntax', undefined, {}, undefined, [
      // Extract inner syntax pipe
      ShowcaseBasedRouting.createRouteFromArtifact(ExtractInnerSyntaxPipe, ShowcaseArtifactTypes.Pipe, ExtractInnerSyntaxPipeShowcase),
      // Markdown pipe
      ShowcaseBasedRouting.createRouteFromArtifact(MarkdownPipe, ShowcaseArtifactTypes.Pipe, MarkdownPipeShowcase),
      // Highlight pipe
      ShowcaseBasedRouting.createRouteFromArtifact(HighlightPipe, ShowcaseArtifactTypes.Pipe, HighlightPipeShowcase),
    ]),
  ]),
  // Services
  new Route('Services', 'services', undefined, {}, undefined, [
    // Syntax processing services
    new Route('Syntax processing', 'syntax', undefined, {}, undefined, [
      // Markdown service
      ShowcaseBasedRouting.createRouteFromArtifact(MarkdownService, ShowcaseArtifactTypes.Service, MarkdownServiceShowcase),
      // Highlight service
      ShowcaseBasedRouting.createRouteFromArtifact(HighlightService, ShowcaseArtifactTypes.Service, HighlightServiceShowcase),
    ]),
  ]),
];
