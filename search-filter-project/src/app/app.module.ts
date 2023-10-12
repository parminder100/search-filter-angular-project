import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDataComponent } from 'src/userData/user-data.component';
import { UserInputComponent } from 'src/userInput/user-input.component';
import { Header } from 'src/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    UserInputComponent,
    Header
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
