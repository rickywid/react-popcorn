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

function addMovieToPlaylistSuccess(id){
	console.log(id);
	return {
		type: types.ADD_MOVIE_TO_PLAYLIST,
		payload: id
	}
}

export function addMovieToPlaylist(id){
	return dispatch => {
		return axios.get(`${url}movie/${id}?language=en-US&api_key=${api}`).then(movie => {
			addMovieToPlaylistSuccess(movie);
		}).catch(error => {
			throw(error);
		});		
	}		
}

function getNowPlayingSuccess(movies){
	return {
		type: types.GET_NOW_PLAYING,
		payload: movies.data.results
	}
}

export function getNowPlaying(){
	return dispatch => {
		return axios.get(`${url}movie/now_playing?page=1&language=en-US&api_key=${api}`).then(movies => {
			getNowPlayingSuccess(movies);
		}).catch(error => {
			throw(error);
		});		
	}		
}
