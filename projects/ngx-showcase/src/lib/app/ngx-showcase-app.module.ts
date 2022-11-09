// Showcasing application module
// ----------------------------------------------------------------------------

// Import modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CdkTreeModule } from '@angular/cdk/tree';
// Import main showcase library module as dependency
import { ShowcaseModule } from '../ngx-showcase.module';
const modules = [RouterModule, CdkTreeModule, ShowcaseModule];

// (Re)export routes
export * from './routes';

// Import and (re)export components
export * from './components';
import { AppPageComponent, AppMenuComponent } from './components';
import { SyntaxAreaComponentShowcase } from '../components/syntax/SyntaxArea/_showcase';
import { SyntaxEditComponentShowcase } from '../components/syntax/SyntaxEdit/_showcase';
import { ShowcaseComponentShowcase } from '../components/demo/Showcase/_showcase';
export { SyntaxAreaComponentShowcase, SyntaxEditComponentShowcase, ShowcaseComponentShowcase };
const components = [AppPageComponent, AppMenuComponent, SyntaxAreaComponentShowcase, SyntaxEditComponentShowcase, ShowcaseComponentShowcase];

// Import providers
import { HttpClient } from '@angular/common/http';
const providers = [HttpClient];

/**
 * Showcasing application module
 */
@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...modules, ...components],
  providers: [...providers],
})
export class ShowcaseAppModule {}
