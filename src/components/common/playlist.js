import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Playlist extends Component {
	
	componentDidMount(){
		console.log('playlist called')
	}

	renderPlaylist(movie){
		return <li>{movie.title}</li>
	}

	render(){
		return (

			<div>
				<h1>Playlist</h1>
				<ul>
				{this.props.playlist.map(this.renderPlaylist)}
				</ul>
			</div>

		)
	}
}

function mapStateToProps(state){
	return ({ playlist: state.addMovieToPlaylist});
}

export default connect(mapStateToProps, null)(Playlist);