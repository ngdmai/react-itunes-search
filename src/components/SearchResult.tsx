import React, { Component } from 'react';
import SearchItem from './SearchItem';

interface Props {
  search: string;
  error: any;
  isLoaded: boolean;
  items: Array<any>;
  history: any;
}

export default class SearchResult extends Component<Props> {
  render() {
    const { search, error, isLoaded, items, history } = this.props;
    return (
      <div className="search-results">
        <div className="search-info">
          {error && <div>Error: {error.message}</div>}
          {isLoaded && search && <h2>Results for: {search}</h2>}
          {!isLoaded && <div>Ready to search iTunes Movies</div>}
        </div>
        <div className="search-result-items">
          {items &&
            items.map(item => (
              <SearchItem
                key={item.trackId}
                item={item}
                searchTerm={search}
                history={history}
              />
            ))}
        </div>
      </div>
    );
  }
}
