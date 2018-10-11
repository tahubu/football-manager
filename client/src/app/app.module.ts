import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { API_URL } from '@constants/api-url.constant';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404PageComponent } from '@pages/error-404-page/error-404-page.component';
import { WelcomePageComponent } from '@pages/welcome-page/welcome-page.component';
import { ListItemsComponent } from '@components/list-items/list-items.component';
import { FormatColumnNamePipe } from '@pipes/format-column-name.pipe';
import { TeamComponent } from "@pages/team/team.component";

@NgModule({
  declarations: [
    AppComponent,
    Error404PageComponent,
    WelcomePageComponent,
    ListItemsComponent,
    FormatColumnNamePipe,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: API_URL, useValue: 'http://127.0.0.1:4200/api' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
