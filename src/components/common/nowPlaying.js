import React, { Component } from 'react';
import { connect } from'react-redux';

class NowPlaying extends Component {
	render(){
		return (
			<div>Now Playing</div>
		)
	}

}

function mapStateToProps(){

}

export default connect(mapStateToProps, null)(NowPlaying);