import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state=initialState.popularMovies, action){
	switch(action.type){

		case types.GET_POPULAR_MOVIES:

			return [...state, action.payload]
		}

	return state;
}