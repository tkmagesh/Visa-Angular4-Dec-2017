import { Component, Output, EventEmitter } from '@angular/core';
import { BugStorageService } from '../services/bugStorage.service';

import { IBug } from '../models/IBug';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { ADDNEWACTION } from '../actions/bugActions';

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

	

	constructor(private bugStorage : BugStorageService, public store: Store<fromRoot.State>){

	}
	onCreateNewClick(){
		let newBug = this.bugStorage.addNew(this.newBugName);
		this.store.dispatch(new ADDNEWACTION(newBug));
	}
}