import React from 'react';
import './App.css';
import Yelp from '../../until/Yelp.js';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { businessArray: [] };
    this.searchYelp = this.searchYelp.bind(this);
    }


  searchYelp (term, location, sortBy) {
    Yelp.search(term, location, sortBy);
  }

  render(){
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businessArray} />
      </div>
    );
  }
}

export default App;
