import React, { Component } from 'react';
import './App.css';
import SearchBar from './search/SearchBar';
import SearchResult from './search/SearchResult';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DetailPage from './detail/DetailPage';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      currentSearch: '',
      searchItems: [],
      isLoaded: false,
      error: null
    };
  }

  loadDataFromApi(query) {
    fetch(`https://itunes.apple.com/search?term=${query}&entity=movie&limit=10`)
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          searchItems: result.results
        });
      })
      .catch(err => {
        console.error(err);
        this.setState({
          error: err
        });
      });
  }

  enterSearchQuery = query => {
    this.setState({
      searchQuery: query
    });
  };

  showSearchResultsOnKeyPress = e => {
    if (e.key === 'Enter') {
      this.showSearchResults();
    }
  };

  showSearchResults = () => {
    this.loadDataFromApi(this.state.searchQuery);
    this.setState({
      currentSearch: this.state.searchQuery
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          onChange={this.enterSearchQuery}
          onPress={this.showSearchResults}
          onKeyPress={this.showSearchResultsOnKeyPress}
        />
        <SearchResult
          search={this.state.currentSearch}
          items={this.state.searchItems}
          error={this.state.error}
          isLoaded={this.state.isLoaded}
        />
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Route path="/" exact component={Search} />
          <Route path="/search/:term" component={Search} />
          <Route path="/movie/:id" component={DetailPage} />
        </Router>
      </div>
    );
  }
}
