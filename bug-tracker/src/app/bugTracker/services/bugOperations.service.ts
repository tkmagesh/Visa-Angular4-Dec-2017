import { IBug } from '../models/IBug';

export class BugOperationsService{
	createNew(bugName : string) : IBug{
		let newBug : IBug = {
			name : bugName,
			isClosed : false
		};
		return newBug;
	}
	toggle(bug : IBug) : IBug {
		return {...bug, isClosed : !bug.isClosed};
	}
}