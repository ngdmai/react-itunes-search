import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';

interface Props {
  history: any;
}

interface State {
  searchQuery: string;
  currentSearch: string;
  searchItems: any[];
  isLoaded: boolean;
  error: any;
}

export default class Search extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    let searchQuery;

    const { history } = this.props;
    const { location } = history;
    const { state } = location;

    if (state) {
      const { searchTerm } = state;
      searchQuery = searchTerm ? searchTerm : '';
    }

    this.state = {
      searchQuery: searchQuery,
      currentSearch: '',
      searchItems: [],
      isLoaded: false,
      error: null
    };
  }

  componentDidMount() {
    this.showSearchResults();
  }

  loadDataFromApi(query: string) {
    fetch(
      `https://itunes.apple.com/search?term=${query}&entity=movie&country=CH&lang=de_ch`
    )
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

  enterSearchQuery = (query: string) => {
    this.setState({
      searchQuery: query
    });
  };

  showSearchResultsOnKeyPress = (e: any) => {
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
          history={this.props.history}
        />
      </div>
    );
  }
}
