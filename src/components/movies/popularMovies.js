import React, { Component } from 'react';
import { Link } from 'react-router';

class PopularMovies extends Component {
	
	renderPopularList(movies){
		
		return movies.map(movie => {
			return (
				<div className="col s3 popular-movies-col">
					<Link to={`/movie/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="responsive-img" /></Link>
				</div>
			)
		});
	}
	

	render(){

		return (


				<div className="row">
					<h5>Popular Movies</h5>
					{this.props.popularMovies.map(this.renderPopularList)}
					
				</div>


		)
	}
}


export default PopularMovies;