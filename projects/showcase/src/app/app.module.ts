// Main ngx-showcase showcase app's application module
// ----------------------------------------------------------------------------

// Import modules
import '@angular/compiler';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// Import ngx-showcase library's showcase application components
import { ShowcaseAppModule } from '../../../ngx-showcase/src/public-api';

// Import main application component
import { AppComponent } from './app.component';
import { FrontpageComponent } from './pages';

/**
 * Main ngx-showcase app's application module
 */
@NgModule({
  declarations: [AppComponent, FrontpageComponent],
  imports: [BrowserModule, AppRoutingModule, ShowcaseAppModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
