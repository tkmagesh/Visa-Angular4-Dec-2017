import { Injectable } from '@angular/core';

import { IBug } from '../models/IBug';
import { BugOperationsService } from './bugOperations.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BugServerService{

	private storage = window.localStorage;

	constructor(private bugOperations : BugOperationsService, private http : Http){

	}
	private save(bug : IBug) : Observable<IBug>{
		if (bug.id === 0){
			return this.http.post('http://localhost:3000/bugs', bug)
				.map(response => response.json());
		} else {
			return this.http.put('http://localhost:3000/bugs/' + bug.id, bug)
				.map(response => response.json());
		}
	}
	addNew(bugName : string) : Observable<IBug> {
		let newBug = this.bugOperations.createNew(bugName, 0);
		return this.save(newBug);
	}
	toggle(bugToToggle : IBug) : Observable<IBug> {
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		return this.save(toggledBug);
	}
	remove(id : number) : Observable<any> {
		return this.http
			.delete('http://localhost:3000/bugs/' + id)
			.map(response => response.json());
	}
	getAll() : Observable<Array<IBug>>{
		return this.http.get('http://localhost:3000/bugs')
			.map(response => response.json())
	}
}