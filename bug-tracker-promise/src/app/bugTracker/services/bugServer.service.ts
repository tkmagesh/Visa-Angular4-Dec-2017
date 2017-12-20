import { Injectable } from '@angular/core';

import { IBug } from '../models/IBug';
import { BugOperationsService } from './bugOperations.service';
import axios from 'axios';

@Injectable()
export class BugServerService{

	private storage = window.localStorage;

	constructor(private bugOperations : BugOperationsService){

	}
	private save(bug : IBug) : Promise<IBug>{
		if (bug.id === 0){
			return axios.post('http://localhost:3000/bugs', bug)
				.then(response => response.data);
		} else {
			return axios.put('http://localhost:3000/bugs/' + bug.id, bug)
				.then(response => response.data);
		}
	}
	addNew(bugName : string) : Promise<IBug> {
		let newBug = this.bugOperations.createNew(bugName, 0);
		return this.save(newBug);
	}
	toggle(bugToToggle : IBug) : Promise<IBug> {
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		return this.save(toggledBug);
	}
	remove(id : number) : Promise<any> {
		return axios
			.delete('http://localhost:3000/bugs/' + id)
			.then(response => response.data);
	}
	getAll(){
		return axios.get('http://localhost:3000/bugs')
			.then(response => response.data)
	}
}