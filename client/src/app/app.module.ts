import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
