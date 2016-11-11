import { combineReducers } from 'redux';
import popularMoviesReducer from './popularMoviesReducer';
import searchMoviesReducer from './searchMoviesReducer';
import movieDetailReducer from './movieDetailReducer';
import addMovieToPlaylistReducer from './addMovieToPlaylistReducer';
import topRatedMoviesReducer from './topRatedMoviesReducer';
import upcomingMoviesReducer from './upcomingMoviesReducer';

const rootReducer = combineReducers({

	popularMovies: popularMoviesReducer,
	searchMovies: searchMoviesReducer,
	movieDetail: movieDetailReducer,
	addMovieToPlaylist: addMovieToPlaylistReducer,
	topRatedMovies: topRatedMoviesReducer,
	upcomingMovies: upcomingMoviesReducer
  
});

export default rootReducer;
