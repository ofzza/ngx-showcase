// Showcasing application module
// ----------------------------------------------------------------------------

// Import modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CdkTreeModule } from '@angular/cdk/tree';
// Import main showcase library module as dependency
import { ShowcaseModule } from '../ngx-showcase.module';
export * from '../ngx-showcase.module';
const modules = [RouterModule, CdkTreeModule, ShowcaseModule];

// (Re)export routes
export * from './routes';

// Import and (re)export application and showcase components
import { AppPageComponent, AppMenuComponent } from './components';
export * from './components';
const components = [AppPageComponent, AppMenuComponent];
// Import services' showcase components
import { CompileServiceShowcase } from '../services/compilation/Compile/_showcase';
import { FetchServiceShowcase } from '../services/resource/Fetch/_showcase';
import { StringServiceShowcase } from '../services/resource/String/_showcase';
import { HighlightServiceShowcase } from '../services/syntax/Highlight/_showcase';
import { MarkdownServiceShowcase } from '../services/syntax/Markdown/_showcase';
export { CompileServiceShowcase, FetchServiceShowcase, StringServiceShowcase, HighlightServiceShowcase, MarkdownServiceShowcase };
const serviceShowcases = [CompileServiceShowcase, FetchServiceShowcase, StringServiceShowcase, HighlightServiceShowcase, MarkdownServiceShowcase];
// Import pipes' showcase components
import { FetchPipeShowcase } from '../pipes/resource/Fetch/_showcase';
import { StringPipeShowcase } from '../pipes/resource/String/_showcase';
import { ExtractInnerSyntaxPipeShowcase } from '../pipes/syntax/ExtractInnerSyntax/_showcase';
import { HighlightPipeShowcase } from '../pipes/syntax/Highlight/_showcase';
import { MarkdownPipeShowcase } from '../pipes/syntax/Markdown/_showcase';
export { FetchPipeShowcase, StringPipeShowcase, ExtractInnerSyntaxPipeShowcase, HighlightPipeShowcase, MarkdownPipeShowcase };
const pipeShowcases = [FetchPipeShowcase, StringPipeShowcase, ExtractInnerSyntaxPipeShowcase, HighlightPipeShowcase, MarkdownPipeShowcase];
// Import components' and directives' showcase components
import { SyntaxAreaComponentShowcase } from '../components/syntax/SyntaxArea/_showcase';
import { SyntaxEditComponentShowcase } from '../components/syntax/SyntaxEdit/_showcase';
import { ShowcaseComponentShowcase } from '../components/demo/Showcase/_showcase';
export { SyntaxAreaComponentShowcase, SyntaxEditComponentShowcase, ShowcaseComponentShowcase };
const componentShowcases = [SyntaxAreaComponentShowcase, SyntaxEditComponentShowcase, ShowcaseComponentShowcase];
const showcases = [...serviceShowcases, ...pipeShowcases, componentShowcases];

// Import providers
import { HttpClient } from '@angular/common/http';
const providers = [HttpClient];

/**
 * Showcasing application module
 */
@NgModule({
  declarations: [...components, ...showcases],
  providers: [...providers],
  imports: [...modules],
  exports: [...modules, ...components, ...showcases],
})
export class ShowcaseAppModule {}
