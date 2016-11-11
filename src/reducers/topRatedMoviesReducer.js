import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state=initialState.topRatedMovies, action){

	switch(action.type){

		case types.GET_TOP_RATED_MOVIES:

			return [action.payload];
		
	}

	return state;
}