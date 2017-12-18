import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorComponent2 } from './calculator/calculator2.component';
import { CalculatorResultComponent } from './calculator/CalculatorResult.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    CalculatorComponent2,
    CalculatorResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
