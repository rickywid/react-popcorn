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
				
				this.setState({ trailer: data.data.results[0].key })
		});		

	}

	addMovieToPlaylist(){

		this.props.addToPlaylist(this.props.params.id);
		toastr.success('Movie Added To Playlist')

	}

	render(){

		//jquery hack to stop youtube video when user closes modal
		$("#myModal").on('hidden.bs.modal', function (e) {
		    $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
		});

		return (
			<div className="row">

				<div className="col s4">
					<img className="responsive-img" src={this.state.poster} />
				</div>

				<div className="col s8 grey lighten-3 z-depth-4">
					<div className="movie-detail-card">
						<h4 className="movie-detail-title">{this.state.title}</h4>
						<ul className="genres">
							{this.state.genre.map((data, index)=>{
								return <li id="genre" key={index}>{data} | </li>;
							})}
							<li id="release-date"> {this.state.releaseDate}</li>							
						</ul>
						  <div className="chip">
						    	<span className="rating">{this.state.rating}</span>/10
						  </div>
						<hr/>

						<p>{this.state.overview}</p>
			
						<h6>Runtime: {this.state.runtime}</h6>
						
						<h6>Starring:</h6>
						<ul className="casts">
							{this.state.cast.map((cast, index) =>{
								return <li id="cast-member" key={index}>{cast.name}</li>;
							})}
							
						</ul>


						<a type="button" className="waves-effect waves-light btn trailer-btn" data-toggle="modal" data-target="#myModal">Watch Trailer</a>
						<a onClick={this.addMovieToPlaylist.bind(this)} className="waves-effect waves-light btn red lighten-1">Add To Playlist</a>




						<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
						  <div className="modal-dialog" role="document">
						    <div className="modal-content">
						      <iframe width="640" height="360" src={`https://www.youtube.com/embed/${this.state.trailer}?autoplay=0`} frameBorder="0" allowFullScreen></iframe>
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