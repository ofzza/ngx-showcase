// Main ngx-showcase app's application module
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import ngx-showcase library's showcase application components
import { ShowcaseAppModule } from '../../../ngx-showcase/src/public-api';

/**
 * Main ngx-showcase app's application module
 */
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ShowcaseAppModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
