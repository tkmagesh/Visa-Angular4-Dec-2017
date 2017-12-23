import { ActionReducer, Action } from '@ngrx/store';
import * as bugActions from '../actions/bugActions';
import { IBug } from '../models/IBug';

export function bugsReducer(currentState : IBug [] = [], action : any) : IBug[] {
	if (action.type === bugActions.ADD_NEW){
		return [...currentState, action.payload];
	}
	if (action.type === bugActions.TOGGLE){
		return currentState.map(bug => bug.id === action.payload.id ? action.payload : bug);
	}
	if (action.type === bugActions.REMOVE){
		return currentState.filter(bug => bug.id !== action.payload.id);
	}
	if(action.type === bugActions.LOAD){
		return action.payload;
	}
	return currentState;
}




