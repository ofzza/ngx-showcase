// Routing module
// Defines application routes and registers them with the app
// ----------------------------------------------------------------------------

// Import modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseAppModule, ShowcaseBasedRouting } from '../../../ngx-showcase/src/public-api';

// Import pages/routes
import { FrontpageComponent } from './pages';
import { routes as generatedRoutes } from '../../../ngx-showcase/src/public-api';

// Routes definition
const routes: Routes = [
  // Frontpage
  { path: '', component: FrontpageComponent },
  // Generated component pages' routes
  ...ShowcaseBasedRouting.generateRoutingModuleRoutes(generatedRoutes),
  // Redirect to default
  { path: '**', redirectTo: '/' },
];

/**
 * Routing module
 * Defines application routes and registers them with the app
 */
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), ShowcaseAppModule],
  exports: [RouterModule, ShowcaseAppModule],
})
export class AppRoutingModule {}
