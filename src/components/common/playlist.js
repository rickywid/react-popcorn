import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removePlaylistItemSuccess } from '../../actions/movieActions';
import toastr from 'toastr';
import { Link } from 'react-router';

class Playlist extends Component {
	constructor(props){
		super(props);

		this.renderPlaylist = this.renderPlaylist.bind(this);
	}

	removeMovieClick(id){
		
		this.props.removePlaylistItemSuccess(id, false)
		toastr.success('movie removed');
	}

	renderPlaylist(data){
	
		return (
			<div className="col s3 playlist-col">
		      	<img src={`https://image.tmdb.org/t/p/w500/${data.movie.poster_path}`} alt="" className="responsive-img" />
		      	<Link to={`/movie/${data.movie.id}`} className="waves-effect waves-light btn playlist-btn">View</Link>
		      	<button onClick={()=>{this.removeMovieClick(data.movie.id)}} className="waves-effect waves-light btn playlist-btn red lighten-1">Remove</button>
		    </div>
		    
		)
	}

	displayPlaylist(){

		if(!this.props.playlist.length){
			return (
				<div className="col s12">
					<h4 className="no-playlist">Oops...Your playlist is currently <span id="empty">empty</span></h4>
				</div>
			)
		} else {
			return (
				<div className="col s12">
					{this.props.playlist.map(this.renderPlaylist)}
				</div>	
			)
		}
	}

	render(){
		return (

			<div className="row row-playlist">
				<div className="col s12">
					<h6>Playlist({this.props.playlist.length})</h6>
				</div>
				
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