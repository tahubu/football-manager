import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: WelcomePageComponent },
  { path: '**', component: Error404PageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
