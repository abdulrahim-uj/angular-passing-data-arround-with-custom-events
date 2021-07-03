import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponentPersonsComponent } from './first-component-persons/first-component-persons.component';
import { PersonInputComponent } from './person-input/person-input.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentPersonsComponent,
    PersonInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
