import { IBug } from '../models/IBug';
import { bugsReducer } from './bugsReducer';

//can be moved to index.ts
export const appReducers = {
	bugs : bugsReducer
}

export interface State {
    bugs: IBug[]
}