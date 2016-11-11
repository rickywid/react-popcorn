import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state=initialState.upcomingMovies, action){

	switch(action.type){

		case types.GET_UPCOMING_MOVIES:

			return [action.payload];
		
	}

	return state;
}