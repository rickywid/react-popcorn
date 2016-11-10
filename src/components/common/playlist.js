import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Playlist extends Component {

	renderPlaylist(movie){
		return <li>{movie.title}</li>
	}

	render(){
		return (

			<div>
				<h1>Playlist</h1>
				<ul>
					{console.log(this.props.playlist)}
				</ul>
			</div>

		)
	}
}

function mapStateToProps(state){
	return ({ playlist: state.addMovieToPlaylist});
}

export default connect(mapStateToProps, null)(Playlist);