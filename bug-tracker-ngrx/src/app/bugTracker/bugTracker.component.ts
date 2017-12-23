import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorageService } from './services/bugStorage.service';

import { Store } from '@ngrx/store';

import * as fromRoot from './reducers';
import * as bugActions from './actions/bugActions';
import { Observable } from 'rxjs/Observable';

@Component({
	selector : 'bug-tracker',
	changeDetection : ChangeDetectionStrategy.OnPush,
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{

	bugs : Observable<IBug[]> ;

	ngOnInit(){
		let data = this.bugStorage.getAll();
		this.store.dispatch(new bugActions.LOADACTION(data));
	}
	

	constructor(private bugStorage : BugStorageService, public store: Store<fromRoot.State>){
		//store.select ====> store.getState()
		this.bugs = this.store.select(state => state.bugs);

	}

	

	onBugClick(bugToToggle : IBug){
		let toggledBug = this.bugStorage.toggle(bugToToggle);
		//this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	
	onRemoveClosedClick(){
		/*this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugStorage.remove(closedBug.id));

		this.bugs = this.bugs.filter(bug => !bug.isClosed);*/
	}
}