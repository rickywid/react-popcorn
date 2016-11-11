import React, { Component } from 'react';
import PopularMovies from '../movies/popularMovies';
import SearchResults from '../movies/searchResults';
//actions
import { getPopularMovies } from '../../actions/movieActions';
import { getTopRatedMovies } from '../../actions/indexActions';
import { getUpcomingMovies } from '../../actions/indexActions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

class Index extends Component {

	componentDidMount(){
		
		this.props.getPopularMovies();
		this.props.getTopRatedMovies();
		this.props.getUpcomingMovies();
		
	}

	renderTopRatedList(movie){
		return movie.map( data=><Link to={`/movie/${data.id}`} className="collection-item"><span className="new badge">{data.vote_average}</span>{data.title}</Link>)
	}

	renderUpcomingList(movie){
		return movie.map( data=><Link to={`/movie/${data.id}`} className="collection-item"><span className="badge"></span>{data.title}</Link>)
	}	

	render(){
		console.log(this.props.upcomingMovies)
		console.log(this.props.topRatedMovies)
		return (
		
		<div>			  
			<div className="row">
				<div className="col s3">
					<h6>Top Rated</h6>
					<div className="collection">
						{this.props.topRatedMovies.map(this.renderTopRatedList)}
					</div>				

					<h6>Upcoming</h6>

					<div className="collection">
						{this.props.upcomingMovies.map(this.renderUpcomingList)}
					</div>	

				</div>
				<div className="col s9">
					<PopularMovies popularMovies={this.props.popularMovies}/>
				</div>
				

			</div>			

		</div>


		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ getPopularMovies, getTopRatedMovies, getUpcomingMovies }, dispatch);
}

function mapStateToProps(state){

	return ({ 
		popularMovies: state.popularMovies,
		topRatedMovies: state.topRatedMovies,
		upcomingMovies: state.upcomingMovies

	});
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);