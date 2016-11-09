import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state=initialState.popularMovies, action){
			console.log('reducer called!!!')

	switch(action.type){

		case types.GET_POPULAR_MOVIES:

			return [action.payload]
		
	}

	return state;
}