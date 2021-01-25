// Main ngx-showcase library module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';

// Import and (re)export dependency modules
export * from './app';
import { ShowcaseAppModule } from './app';

// (Re)export services
export * from './services';

/**
 * Main ngx-showcase library module
 */
@NgModule({
  declarations: [],
  imports: [ShowcaseAppModule],
  exports: [ShowcaseAppModule],
})
export class ShowcaseModule {}
