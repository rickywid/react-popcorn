import React, { Component } from 'react';

import { addMovieToPlaylist } from '../../actions/movieActions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import toastr from 'toastr';

class MoviesDetail extends Component {

	constructor(props){
		super(props);

		this.state = { 
				id: '',
				title: '',
				cast: [],
				poster: '',
				trailer: '',
				overview: '',
				genre: [],
				runtime: '',
				rating: '',
				releaseDate: ''
			}
	}

	componentDidMount(){
	
		axios.get(`https://api.themoviedb.org/3/movie/${this.props.params.id}?api_key=9094bd89b4b922c0b131a32e1a1be836`).then(data=>{
			this.setState({ id: data.data.id });
			this.setState({ title: data.data.title });
			this.setState({ overview: data.data.overview });
			this.setState({ runtime: data.data.runtime });
			this.setState({ poster: `https://image.tmdb.org/t/p/w500/${data.data.poster_path}` });
			this.setState({ rating: data.data.vote_average });
			this.setState({ releaseDate: data.data.release_date });
			
			let genreArray = [];

			data.data.genres.map(genre=>{
				genreArray.push(genre.name);
			})
			this.setState({ genre: genreArray})
			
		});

		axios.get(`https://api.themoviedb.org/3/movie/${this.props.params.id}/credits?api_key=9094bd89b4b922c0b131a32e1a1be836`).then(data=>{
				this.setState({ cast: data.data.cast.slice(0,6) })
		});

		axios.get(`https://api.themoviedb.org/3/movie/${this.props.params.id}/videos?language=en-US&api_key=9094bd89b4b922c0b131a32e1a1be836`).then(data=>{
				
				this.setState({ trailer: `https://www.youtube.com/watch?v=${data.data.results[0].key}` })
		});		

	}

	addMovieToPlaylist(){

		this.props.addToPlaylist(this.props.params.id);
		toastr.success('Movie Added To Playlist')

	}

	render(){
		return (
			<div className="row">

				<div className="col s4">
					<img className="responsive-img" src={this.state.poster} />
				</div>

				<div className="col s8 teal lighten-5 z-depth-4">
					<div className="movie-detail-card">
						<h1 className="movie-detail-title">{this.state.title}</h1>
						  <div className="chip">
    {this.state.rating}
    <i className="small material-icons">star</i>
  </div>
						<hr/>

						<p>{this.state.overview}</p>
			
						<p>Release: {this.state.releaseDate}</p>
						<h6>Runtime: {this.state.runtime}</h6>
						
						<h6>Starring:</h6>
						<ul className="casts">
							{this.state.cast.map((cast, index) =>{
								return <li id="cast-member" key={index}>{cast.name}</li>;
							})}
							
						</ul>
						<ul className="genres">
							{this.state.genre.map((data, index)=>{
								return <li id="genre" key={index}>{data}</li>;
							})}
						</ul>

						<a href={this.state.trailer} target="_blank" className="waves-effect waves-light btn trailer-btn">Watch Trailer</a>
						<a onClick={this.addMovieToPlaylist.bind(this)} className="waves-effect waves-light btn red lighten-1">Add To Playlist</a>



						<button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
							Launch demo modal
						</button>

<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <iframe width="640" height="360" src="https://www.youtube.com/embed/ucTQ2C5CFFQ?rel=0?autoplay=0" frameborder="0" allowfullscreen></iframe>
            <div class="modal-footer">
      </div>
    </div>
  </div>
</div>					

				</div>

				</div>
			</div>










					
				)
			}
		}

		function mapStateToProps(state, ownProps){
		

			return {
				id: ownProps.params.id
			}
		}

		function mapDispatchToProps(dispatch){
			return bindActionCreators({ addToPlaylist: addMovieToPlaylist }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesDetail);