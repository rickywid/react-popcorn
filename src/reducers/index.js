import { combineReducers } from 'redux';
import popularMoviesReducer from './popularMoviesReducer';
import searchMoviesReducer from './searchMoviesReducer';
import movieDetailReducer from './movieDetailReducer';
import addMovieToPlaylistReducer from './addMovieToPlaylistReducer';

const rootReducer = combineReducers({

	popularMovies: popularMoviesReducer,
	searchMovies: searchMoviesReducer,
	movieDetail: movieDetailReducer,
	addMovieToPlaylist: addMovieToPlaylistReducer
  
});

export default rootReducer;
