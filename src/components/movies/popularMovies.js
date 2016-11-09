import React, { Component } from 'react';

class PopularMovies extends Component {
	
	renderPopularList(movies){
		
		return movies.map(movie => {
			return <li><a href={`/movie/${movie.id}`}>{movie.title}</a></li>
		});
	}
	

	render(){

		return (

			<div className="col s5">
				<h5>Popular Movies</h5>
				<ul>

					{this.props.popularMovies.map(this.renderPopularList)}
					
				</ul>
			</div>	

		)
	}
}


export default PopularMovies;