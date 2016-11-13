import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state=initialState.playlist, action){
			

	switch(action.type){

		case types.ADD_MOVIE_TO_PLAYLIST:
			console.log(state)
			return [...state, {movie: action.payload.movie.data, inPlaylist: action.payload.inPlaylist }];
	
		
		case types.REMOVE_PLAYLIST_ITEM :

			return	state.filter(movie =>  movie.movie.id !== action.payload.movie );
			

		}

		
	return state;
}