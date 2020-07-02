import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { F1Component } from './forms/f1/f1.component';
import { F2Component } from './forms/f2/f2.component';
import { F3Component } from './forms/f3/f3.component';
import { ValidationErrorComponent } from './forms/validation-error/validation-error.component';
import { LabelInputComponent } from './forms/label-input/label-input.component';


@NgModule({
  declarations: [
    AppComponent,
    F1Component,
    F2Component,
    F3Component,
    ValidationErrorComponent,
    LabelInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
