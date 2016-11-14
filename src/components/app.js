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

        <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container">
            © 2016 React-Popcorn
            <a className="grey-text text-lighten-4 right" target="_blank" href="https://github.com/rickywid/react-popcorn">View Source</a>
            </div>
          </div>
        </footer>
    </div>  

    );
  }
}

export default App;
