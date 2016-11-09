import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function movies(state=initialState.searchMovies, action){
	
	switch(action.type){			 

		case types.SEARCH_MOVIES_RESULTS:
			
			return [action.payload];
			
		}

	return state;
}