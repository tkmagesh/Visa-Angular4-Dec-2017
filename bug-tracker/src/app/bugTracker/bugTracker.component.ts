import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{

	bugs : IBug[] = [];

	constructor(private bugOperations : BugOperationsService){
		
	}

	onCreateNewClick(bugName : string){
		let newBug = this.bugOperations.createNew(bugName);
		this.bugs.push(newBug);
	}

	onBugClick(bug : IBug){
		this.bugOperations.toggle(bug);
	}

	
	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
}