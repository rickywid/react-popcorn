import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state=initialState.playlist, action){
			

	switch(action.type){

		case types.ADD_MOVIE_TO_PLAYLIST:
			console.log(action.payload.data)
			console.log(state)
			return [...state, action.payload.data];
		
		case types.REMOVE_PLAYLIST_ITEM :
	
			//console.log(state)
			console.log(action.payload)
			console.log('---');
			state.map(id => {console.log(id.id) })
	
			return	state.filter(movie => movie.id !== action.payload );
			

		}

		
	return state;
}