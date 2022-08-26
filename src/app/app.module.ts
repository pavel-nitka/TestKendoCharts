import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { HttpClientModule } from '@angular/common/http';

import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, ChartsModule, FormsModule, HttpClientModule, ButtonsModule, InputsModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
