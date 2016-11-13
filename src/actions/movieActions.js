import axios from 'axios';
import * as types from './actionTypes';

const api = "9094bd89b4b922c0b131a32e1a1be836";
const url = "https://api.themoviedb.org/3/";

function loadPopularMoviesSuccess(movies){
	//console.log(movies.data.results);
	return {
		type: types.GET_POPULAR_MOVIES,
		payload: movies.data.results
	}
}

export function getPopularMovies() {
	return dispatch => {
		return axios.get(`${url}movie/popular?language=en-US&api_key=${api}`).then(movies => {
			dispatch(loadPopularMoviesSuccess(movies));
		}).catch(error => {
			throw(error);
		});		
	}
}



function searchMoviesSuccess(film){
	return {
		type: types.SEARCH_MOVIES_RESULTS,
		payload: film.data.results
	}
}

export function searchMovies(movie){
	return dispatch => {
		return axios.get(`${url}search/movie?api_key=${api}&query=${movie}`).then(film => {
			dispatch(searchMoviesSuccess(film));
		}).catch(error => {
			throw(error); 
		});		
	}
}

function addMovieToPlaylistSuccess(id, inPlaylist){
	return {
		type: types.ADD_MOVIE_TO_PLAYLIST,
		payload: {
			movie: id,
			inPlaylist: inPlaylist
		}
	}
}

export function addMovieToPlaylist(id, inPlaylist){ 

	return dispatch => {
		return axios.get(`${url}movie/${id}?language=en-US&api_key=${api}`).then(movie => {
			dispatch(addMovieToPlaylistSuccess(movie, inPlaylist));
		}).catch(error => {
			throw(error);
		});		
	}		
}

export function removePlaylistItemSuccess(id, inPlaylist){
	return {
		type: types.REMOVE_PLAYLIST_ITEM,
		payload: {
			movie: id,
			inPlaylist: inPlaylist
		}
	}
}


