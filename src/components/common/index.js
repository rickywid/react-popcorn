import React, { Component } from 'react';
import PopularMovies from '../movies/popularMovies';
import SearchResults from '../movies/searchResults';
//actions
import { getPopularMovies } from '../../actions/movieActions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Index extends Component {

	componentDidMount(){
		
		this.props.getPopularMovies();
		
	}

	render(){
		return (

		<div className="row">
			{console.log(this.props)}
			<PopularMovies popularMovies={this.props.popularMovies}/>
			<SearchResults results={this.props.searchMovies} />

		</div>			

		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ getPopularMovies }, dispatch);
}

function mapStateToProps(state){

	return ({ 
		popularMovies: state.popularMovies, 
		searchMovies: state.searchMovies
	});
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);