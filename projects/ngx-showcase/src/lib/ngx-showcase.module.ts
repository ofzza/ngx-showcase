// Main ngx-showcase library module
// ----------------------------------------------------------------------------

// Import modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
const modules = [CommonModule, HttpClientModule];

// Import and (re)export child components
export * from './components';
import { SyntaxAreaComponent, SyntaxAreaComponentShowcase } from './components';
const components = [SyntaxAreaComponent, SyntaxAreaComponentShowcase];

// Import and (re)export pipes
export * from './pipes';
import { ExtractInnerSyntaxPipe } from './pipes';
import { FetchPipe } from './pipes';
import { MarkdownPipe, MarkdownAsyncPipe } from './pipes';
import { HighlightPipe, HighlightAsyncPipe } from './pipes';
const pipes = [ExtractInnerSyntaxPipe, FetchPipe, HighlightPipe, HighlightAsyncPipe, MarkdownPipe, MarkdownAsyncPipe];

// Import and (re)export injectables
export * from './services';
import { MarkdownService } from './services';
import { HighlightService } from './services';
const injectables = [MarkdownService, HighlightService];

/**
 * Main ngx-showcase library module
 */
@NgModule({
  declarations: [...components, ...pipes],
  providers: [...injectables],
  imports: [...modules],
  exports: [...modules, ...components, ...pipes],
})
export class ShowcaseModule {}
