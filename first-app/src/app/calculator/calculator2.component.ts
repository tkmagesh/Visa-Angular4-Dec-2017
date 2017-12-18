import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';
@Component({
	selector : 'app-calculator-2',
	template : `
		<h3>Calculator-2</h3>
		<input type="number" [(ngModel)]="model.number1">
		<select #operator>
			<option value="add">Add</option>
			<option value="subtract">Subtract</option>
		</select>
		<input type="number" [(ngModel)]="model.number2">
		<input type="button" value="Calculate" (click)="model[operator.value]()">
		<div>{{model.result}}</div>
	`
})
export class CalculatorComponent2{
	model : CalculatorModel = new CalculatorModel();

	
}