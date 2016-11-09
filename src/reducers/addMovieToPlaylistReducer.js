import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state=initialState.playlist, action){

	switch(action.type){

		case types.ADD_MOVIE_TO_PLAYLIST:
			console.log(state)
			return [...state, action.payload.data]

		}

	return state;
}