import React, { Component } from 'react';
import PopularMovies from '../movies/popularMovies';
import SearchResults from '../movies/searchResults';
//actions
import { getPopularMovies } from '../../actions/movieActions';
import { getNowPlaying } from '../../actions/movieActions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Index extends Component {

	componentDidMount(){
		
		this.props.getPopularMovies();
		
	}

	render(){
		return (
		
		<div>			  
			<div className="row">
				<PopularMovies popularMovies={this.props.popularMovies}/>

			</div>			

		</div>


		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ getPopularMovies, getNowPlaying }, dispatch);
}

function mapStateToProps(state){

	return ({ 
		popularMovies: state.popularMovies, 
	});
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);