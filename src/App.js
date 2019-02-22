import React, { Component } from 'react';
import './App.css';
import SearchBar from './search-bar/SearchBar';
import SearchResult from './search-result/SearchResult';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <SearchResult />
      </div>
    );
  }
}

export default App;
