// Showcasing application module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CdkTreeModule } from '@angular/cdk/tree';

// (Re)export routes
export * from './routes';

// Import main showcase library module as dependency
import { ShowcaseModule } from '../ngx-showcase.module';

// Import components
import { AppMenuComponent } from './components';

/**
 * Showcasing application module
 */
@NgModule({
  declarations: [AppMenuComponent],
  imports: [CommonModule, RouterModule, CdkTreeModule, ShowcaseModule],
  exports: [AppMenuComponent, ShowcaseModule],
})
export class ShowcaseAppModule {}
