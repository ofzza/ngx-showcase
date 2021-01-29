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
import { AppMenuComponent } from './components';
const components = [AppMenuComponent];

/**
 * Showcasing application module
 */
@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...modules, ...components],
})
export class ShowcaseAppModule {}
