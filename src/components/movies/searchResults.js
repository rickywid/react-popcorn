import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router';

class SearchResults extends Component {

	renderSearchResults(results){
		return results.map(result=>{
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
		})
	}

	render(){
		
		
		const paramsName = this.props.params.name

		return (

			<div className="row">
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