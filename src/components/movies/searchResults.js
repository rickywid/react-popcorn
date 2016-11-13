import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router';

class SearchResults extends Component {

	renderSearchResults(result){
		
	
		return (

			<div className="col s3 popular-movies-col">
				{ result.poster_path ? 
					<Link to={`/movie/${result.id}`}>
						<img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} className="responsive-img height-350" />
					</Link> : 
					<img src="http://placehold.it/246x350" className="responsive-img"/>
				}
			</div>
		)
	}

	searchNumLength(){
		if(this.props.searchResults.length > 2){
			return `${this.props.searchResults.length} results`;
		} else {
			return "1 result";
		}
	}

	render(){
		return (

			<div className="row">
					<h6 id="search-results">{this.searchNumLength()} found for <i>"{this.props.params.name}"</i></h6>
					{this.props.searchResults.results.map(this.renderSearchResults)}
					{/*this.props.searchResults.results.map(data=> <li>{data.title}</li>)*/}
			</div>
			
		)
	}
}

function mapStateToProps(state){
	return { 
		searchResults: state.searchMovies
		
	};
}

export default connect(mapStateToProps, null)(SearchResults);