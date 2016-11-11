import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removePlaylistItemSuccess } from '../../actions/movieActions';
import toastr from 'toastr';

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
			<li className="collection-item avatar">
		      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className="circle" />
		      <span className="title">{movie.title}</span> <br />
		      	<button onClick={()=>{this.removeMovieClick(movie.id)}} className="waves-effect waves-light btn">Show Detail</button>
		      	<button onClick={()=>{this.removeMovieClick(movie.id)}} className="waves-effect waves-light btn">Remove</button>
		      <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
		    </li>
		)
	}

	displayPlaylist(){

		if(!this.props.playlist.length){
			return (
				<h2>Your playlist is empty</h2>
			)
		} else {
			return (
				<ul className="collection">
					{this.props.playlist.map(this.renderPlaylist)}
				</ul>	
			)
		}
	}

	render(){
		return (

			<div>
				<h5>{this.props.playlist.length}</h5>
				{this.displayPlaylist()}
				{console.log(this.props.playlist)}
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