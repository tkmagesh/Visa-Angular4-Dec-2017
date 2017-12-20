import { Component, Output, EventEmitter } from '@angular/core';
//import { BugStorageService } from '../services/bugStorage.service';
import { BugServerService } from '../services/bugServer.service';
import { IBug } from '../models/IBug';


@Component({
	selector : 'bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" [(ngModel)]="newBugName">
			<input type="button" value="Create New" (click)="onCreateNewClick()">
		</section>
	`
})
export class BugEditComponent{
	newBugName : string = '';

	@Output()
	newBugCreated : EventEmitter<IBug> = new EventEmitter<IBug>();

	constructor(private bugServer : BugServerService){

	}
	onCreateNewClick(){
		/*let newBug = this.bugStorage.addNew(this.newBugName);
		this.newBugCreated.emit(newBug);*/

		this.bugServer.addNew(this.newBugName)
			.subscribe(newBug => this.newBugCreated.emit(newBug));
	}
}