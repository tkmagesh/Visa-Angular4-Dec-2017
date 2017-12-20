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

	

	/*constructor(private bugServer : BugServerService){
		this.bugServer.getAll()
			.then(bugs => this.bugs = bugs);
	}

	onNewBugCreated(newBug : IBug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bugToToggle : IBug){
		this.bugServer.toggle(bugToToggle)
			.then(toggledBug => this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug));
	}

	
	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugServer.remove(closedBug.id));

		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}*/

	constructor(private bugServer : BugServerService){
		
	}

	async ngOnInit(){
		this.bugs = await this.bugServer.getAll()
	}
	onNewBugCreated(newBug : IBug){
		this.bugs = [...this.bugs, newBug];
	}

	async onBugClick(bugToToggle : IBug){
		let toggledBug = await this.bugServer.toggle(bugToToggle)
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	
	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugServer.remove(closedBug.id));

		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
}