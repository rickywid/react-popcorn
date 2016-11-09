import React, { Component } from 'react';

//components
import Nav from './common/nav';
import SearchInput from './common/searchInput';


// root (/)
class App extends Component {


  render() {
    return (
      
    <div>
 
		<Nav />
		<SearchInput />	

		{this.props.children}


    </div>  

    );
  }
}

export default App;
