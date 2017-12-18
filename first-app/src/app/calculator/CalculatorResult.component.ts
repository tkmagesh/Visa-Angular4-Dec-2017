import { Component, Input } from '@angular/core';

@Component({
	selector : 'app-calculator-result',
	template : `<div [ngClass]="{positive : data >= 0, negative : data < 0}">{{data}}</div>`
})
export class CalculatorResultComponent{

	@Input()
	data : number = 0;
}