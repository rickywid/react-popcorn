import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removePlaylistItemSuccess } from '../../actions/movieActions';
import toastr from 'toastr';
import { Link } from 'react-router';

class Playlist extends Component {
	constructor(props){
		super(props);

		this.state=({ id: '' });

		this.renderPlaylist = this.renderPlaylist.bind(this);
	}

	removeMovieClick(id){
		
		this.props.removePlaylistItemSuccess(id)
		toastr.success('movie removed');
	}

	renderPlaylist(movie){
		
		return (
			<div className="col s3 playlist-col">
		      	<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className="responsive-img" />
		      	<Link to={`/movie/${movie.id}`} className="waves-effect waves-light btn playlist-btn">View</Link>
		      	<button onClick={()=>{this.removeMovieClick(movie.id)}} className="waves-effect waves-light btn playlist-btn">Remove</button>
		    </div>
		    
		)
	}

	displayPlaylist(){

		if(!this.props.playlist.length){
			return (
				<p>Oop...Your playlist is currently empty</p>
			)
		} else {
			return (
				<div className="row">
					{this.props.playlist.map(this.renderPlaylist)}
				</div>	
			)
		}
	}

	render(){
		return (

			<div>
				<h5>Playlist({this.props.playlist.length})</h5>
				{this.displayPlaylist()}
				
			</div>

		)
	}
}

function mapStateToProps(state){
	return ({ playlist: state.addMovieToPlaylist});
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ removePlaylistItemSuccess }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);