import React, { Component } from 'react';

import { connect } from 'react-redux';

class SearchResults extends Component {

	renderSearchResults(results){
		return results.map(result=>{
			return (

				<div className="col s3">
					<a href={`/movie/${result.id}`}><img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} height="300" /></a>
				</div>
			)
		})
	}

	render(){
		return (

			<div className="row">
				<h5>Searc Results</h5>
					{this.props.searchResults.map(this.renderSearchResults)}
				
			</div>
			
		)
	}
}

function mapStateToProps(state){

	return ({ 
		searchResults: state.searchMovies
	});
}

export default connect(mapStateToProps, null)(SearchResults);