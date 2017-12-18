import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'app-calculator',
	templateUrl : 'calculator.component.html'
})
export class CalculatorComponent{

	model : CalculatorModel;

	constructor(){
		this.model = new CalculatorModel();
	}

}