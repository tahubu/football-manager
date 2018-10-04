import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404PageComponent,
    WelcomePageComponent,
    TeamPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
