import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';
//import { BugStorageService } from './services/bugStorage.service';
import { BugServerService } from './services/bugServer.service';


@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{

	bugs : IBug[] = [];

	
	ngOnInit(){
		this.bugServer
			.getAll()
			.subscribe(bugs => this.bugs = bugs);
	}
	constructor(private bugServer : BugServerService){
		
	}

	onNewBugCreated(newBug : IBug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bugToToggle : IBug){
		this.bugServer.toggle(bugToToggle)
			.subscribe(toggledBug => this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug));
	}

	
	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugServer.remove(closedBug.id).subscribe(_ => {}));

		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	
}