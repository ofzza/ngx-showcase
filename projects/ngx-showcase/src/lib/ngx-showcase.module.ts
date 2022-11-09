// Main ngx-showcase library module
// ----------------------------------------------------------------------------

// Import modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
const modules = [CommonModule, HttpClientModule];

// Import and (re)export child components
import { SyntaxAreaComponent } from './components';
import { SyntaxEditComponent } from './components';
import { ShowcaseComponent } from './components';
export * from './components';
const components = [SyntaxAreaComponent, SyntaxEditComponent, ShowcaseComponent];

// Import and (re)export pipes
export * from './pipes';
import { ExtractInnerSyntaxPipe } from './pipes';
import { FetchPipe } from './pipes';
import { StringPipe } from './pipes';
import { MarkdownPipe, MarkdownAsyncPipe } from './pipes';
import { HighlightPipe, HighlightAsyncPipe } from './pipes';
const pipes = [ExtractInnerSyntaxPipe, FetchPipe, StringPipe, HighlightPipe, HighlightAsyncPipe, MarkdownPipe, MarkdownAsyncPipe];

// Import and (re)export injectables
export * from './services';
import { CompileService } from './services';
import { FetchService } from './services';
import { StringService } from './services';
import { MarkdownService } from './services';
import { HighlightService } from './services';
const providers = [CompileService, FetchService, StringService, MarkdownService, HighlightService];

/**
 * Main ngx-showcase library module
 */
@NgModule({
  declarations: [...components, ...pipes],
  providers: [...providers],
  imports: [...modules],
  exports: [...modules, ...components, ...pipes],
})
export class ShowcaseModule {}

// Register parent module with showcase service
CompileService._registerParentModule(ShowcaseModule);
