// Routing module
// Defines application routes and registers them with the app
// ----------------------------------------------------------------------------

// Import dependencies
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseModule, ShowcaseBasedRouting } from '../../../ngx-showcase/src/public-api';

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
  imports: [RouterModule.forRoot(routes), ShowcaseModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
