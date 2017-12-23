import { Injectable } from '@angular/core';

import { IBug } from '../models/IBug';
import { BugOperationsService } from './bugOperations.service';

@Injectable()
export class BugStorageService{
	private currentBugId : number = 0;
	private storage = window.localStorage;

	constructor(private bugOperations : BugOperationsService){

	}
	private save(bug : IBug){
		console.log(bug);
		this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
	}
	addNew(bugName : string){
		let newBug = this.bugOperations.createNew(bugName, ++this.currentBugId);

		this.save(newBug);
		return newBug;
	}
	toggle(bugToToggle : IBug) : IBug {
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.save(toggledBug);
		return toggledBug;
	}
	remove(id : number) : void {
		this.storage.removeItem(id.toString());
	}
	getAll(){
		let result = [];
		for(let index = 0, count = this.storage.length; index < count; index++){
			let key = this.storage.key(index),
				rawData = this.storage.getItem(key),
				bug = JSON.parse(rawData);
			this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
			result.push(bug);
		}
		return result;
	}
}