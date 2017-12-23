import { Action } from '@ngrx/store';
import { IBug } from '../models/IBug';
export const ADD_NEW = '[Bug] Add';

export class ADDNEWACTION implements Action {
    type = ADD_NEW;

    constructor(public payload: IBug) {}
}

export const TOGGLE = '[Bug] Toggle';

export class TOGGLEACTION implements Action{
	type = TOGGLE;

	constructor(public payload : IBug){}
}

export const REMOVE = '[Bug] Remove';

export class REMOVEACTION implements Action{
	type = REMOVE;
	constructor(public payload : IBug){}
}

export const LOAD = '[Bug] Load';
export class LOADACTION implements Action{
	type = LOAD;
	constructor(public payload : IBug[]=[]){}
}