import { IBug } from '../models/IBug';

export class BugOperationsService{
	createNew(bugName : string, id : number = 0) : IBug{
		let newBug : IBug = {
			name : bugName,
			isClosed : false,
			id : id,
			createdAt : new Date()
		};
		return newBug;
	}
	toggle(bug : IBug) : IBug {
		return {...bug, isClosed : !bug.isClosed};
	}
}