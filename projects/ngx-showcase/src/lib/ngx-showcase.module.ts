// Main ngx-showcase library module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import child components
import { SyntaxAreaComponent, SyntaxAreaComponentShowcase } from './components';
const components = [SyntaxAreaComponent, SyntaxAreaComponentShowcase];

// Import pipes
import { ExtractInnerSyntaxPipe } from './pipes';
import { MarkdownPipe } from './pipes';
const pipes = [ExtractInnerSyntaxPipe, MarkdownPipe];

// Import injectables
import { MarkdownService } from './services';
import { HighlightService } from './services';
const injectables = [MarkdownService, HighlightService];

// (Re)export services
export * from './services';

/**
 * Main ngx-showcase library module
 */
@NgModule({
  declarations: [...components, ...pipes],
  providers: [...injectables],
  imports: [CommonModule],
  exports: [CommonModule, ...components, ...pipes],
})
export class ShowcaseModule {}
