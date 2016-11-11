  import React, { Component } from 'react';
  import { browserHistory } from 'react-router';
  import { connect } from 'react-redux';
  import { bindActionCreators } from 'redux';
  import { searchMovies } from '../../actions/movieActions';



  class SearchInput extends Component {
    
    constructor(props){
      super(props);

      this.state = { input: ''}
    }

    onSubmit(e){
      e.preventDefault();
      this.props.searchMovies(this.state.input);
      browserHistory.push(`/search/${this.state.input}`);

    }

    onChangeHandler(e){

      this.setState({ input: e.target.value });
    }

    render(){
      return (

        <div className="row">
          <form className="col s12" onSubmit={this.onSubmit.bind(this)}>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">search_circle</i>
                <input id="icon_prefix" type="text" className="validate" onChange={this.onChangeHandler.bind(this)} />
                <label htmlFor="icon_prefix">Search</label>
              </div>
            </div>
          </form>
        </div>


      )
    }
  }

function mapDispatchToProps(dispatch){
  return bindActionCreators({ searchMovies }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchInput);