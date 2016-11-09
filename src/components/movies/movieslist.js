import React, { Component } from 'react';

class MoviesList extends Component {

	render(){
		return (

			<div className="row">
		    	<div className="col s4">
		      		<a className="waves-effect waves-light btn"><i className="material-icons right">Trailer</i></a>
				</div>

		      <div className="col s4"><span>Oceans Eleven</span></div>

		      <div className="col s4">1</div>
		    </div>

		)
	}


}


export default MoviesList;