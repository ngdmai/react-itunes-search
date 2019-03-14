import React, { Component } from "react";
import "./App.css";
import SearchBar from "./search-bar/SearchBar";
import SearchResult from "./search-result/SearchResult";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      searchItems: [],
      isLoaded: false,
      error: null
    };
  }

  enterSearchQuery = query => {
    this.setState({
      searchQuery: query
    });
  };

  loadDataFromApi(query) {
    fetch(`https://itunes.apple.com/search?term=${query}&entity=movie&limit=10`)
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          items: result.results
        });
      })
      .catch(err => {
        console.error(err);
        this.setState({
          error: err
        });
      });
  }

  showSearchResults = () => {
    this.loadDataFromApi(this.state.searchQuery);
    this.setState({
      currentSearch: this.state.searchQuery
    });
  };

  render() {
    return (
      <div className="container">
        <div>
          <SearchBar
            onChange={this.enterSearchQuery}
            onPress={this.showSearchResults}
          />
        </div>
        <SearchResult
          search={this.state.currentSearch}
          items={this.state.items}
          error={this.state.error}
          isLoaded={this.state.isLoaded}
        />
      </div>
    );
  }
}

export default App;
