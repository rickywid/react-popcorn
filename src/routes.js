import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import MoviesDetail from './components/movies/moviesDetail';
import About from './components/common/about';
import Playlist from './components/common/playlist';
import Contact from './components/common/contact';
import Index from './components/common/index';
import SearchResults from './components/movies/searchResults';
import NowPlaying from './components/common/nowPlaying';

export default (

	<Route path="/" component={App}>

		<IndexRoute component={Index} />
		<Route path="/about" component={About} />
		<Route path="/playlist" component={Playlist} />
		<Route path="/contact" component={Contact} />
		<Route path="/movie/:id" component={MoviesDetail} />
		<Route path="/search" component={SearchResults} />
		<Route path="/nowplaying" component={NowPlaying} />


	</Route>


)


