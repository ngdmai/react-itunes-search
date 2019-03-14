import React, { Component } from 'react';
import SearchItem from '../search-item/SearchItem';

export default class SearchResult extends Component {
  filterSearchResults(result) {
    return result.kind === 'feature-movie';
  }

  render() {
    const { search, error, isLoaded, items } = this.props;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {search && <h2>Results for: {search}</h2>}
          {items
            .filter(item => this.filterSearchResults(item))
            .map(item => (
              <SearchItem key={item.trackId} item={item} />
            ))}
        </div>
      );
    }
  }
}
