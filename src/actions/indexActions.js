import axios from 'axios';
import * as types from './actionTypes';

const api = "9094bd89b4b922c0b131a32e1a1be836";
const url = "https://api.themoviedb.org/3/";

function getTopRatedMoviesSuccess(movies){
	//console.log(movies.data.results);
	return {
		type: types.GET_TOP_RATED_MOVIES,
		payload: movies.data.results
	}
}

export function getTopRatedMovies() {
	return dispatch => {
		return axios.get(`${url}movie/top_rated?page=1&language=en-US&api_key=${api}`).then(movies => {
			dispatch(getTopRatedMoviesSuccess(movies));
		}).catch(error => {
			throw(error);
		});		
	}
}

function getUpcomingMoviesSuccess(movies){
	//console.log(movies.data.results);
	return {
		type: types.GET_UPCOMING_MOVIES,
		payload: movies.data.results
	}
}

export function getUpcomingMovies() {
	return dispatch => {
		return axios.get(`${url}movie/upcoming?page=1&language=en-US&api_key=${api}`).then(movies => {
			dispatch(getUpcomingMoviesSuccess(movies));
		}).catch(error => {
			throw(error);
		});		
	}
}

