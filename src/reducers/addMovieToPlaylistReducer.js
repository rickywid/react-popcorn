import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state=initialState.playlist, action){
			console.log('reducer called!!!')

	switch(action.type){

		case types.ADD_MOVIE_TO_PLAYLIST:
			
		}

	return state;
}