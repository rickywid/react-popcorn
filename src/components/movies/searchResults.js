import React, { Component } from 'react';

class SearchResults extends Component {

	renderSearchResults(results){
		return results.map(result=>{
			return (
				<li><a href="#">{result.title}</a></li> 
			)
		})
	}

	render(){
		return (

			<div className="col s7">
				<ul>
					
					{this.props.results.map(this.renderSearchResults)}
				</ul>
			</div>
			
		)
	}
}

export default SearchResults;