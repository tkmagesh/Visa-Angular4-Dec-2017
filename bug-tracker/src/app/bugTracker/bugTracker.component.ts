import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{

	bugs : IBug[] = [];

	newBugName : string = '';

	constructor(private bugOperations : BugOperationsService){
		
	}

	onCreateNewClick(){
		let newBug = this.bugOperations.createNew(this.newBugName);
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bugToToggle : IBug){
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	
	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
}