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
				runtime: '' 
			}
	}

	componentDidMount(){
		
		axios.get(`https://api.themoviedb.org/3/movie/${this.props.params.id}?api_key=9094bd89b4b922c0b131a32e1a1be836`).then(data=>{
			this.setState({ id: data.data.id });
			this.setState({ title: data.data.title });
			this.setState({ overview: data.data.overview });
			this.setState({ runtime: data.data.runtime });
			this.setState({ poster: `https://image.tmdb.org/t/p/w500/${data.data.poster_path}` })
			
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

	}

	render(){
		return (
			<div>
				<img height="400" src={this.state.poster} />
				<h1>{this.state.title}</h1>
				<p>{this.state.overview}</p>
				
				<a href={this.state.trailer} target="_blank" className="waves-effect waves-light btn">Watch Trailer</a>
				<ul>
					{this.state.genre.map(data=>{
						return <li>{data}</li>;
					})}
				</ul>
				  <a className="btn-floating btn-large waves-effect waves-light red" onClick={this.addMovieToPlaylist.bind(this)}><i className="material-icons">add</i></a>

				<h5>Runtime: {this.state.runtime}</h5>

				<ul>
					{this.state.cast.map((cast, index) =>{
								return <li key={index}>{cast.name}</li>;
							})}
					
						</ul>
						
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