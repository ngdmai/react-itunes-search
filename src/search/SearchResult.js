import React, { Component } from 'react';
import SearchItem from './SearchItem';
import styled from 'styled-components';

const SearchInfo = styled.div`
  margin-bottom: 16px;
  text-align: center;
`;

export default class SearchResult extends Component {
  render() {
    const { search, error, isLoaded, items } = this.props;
    return (
      <div>
        <SearchInfo>
          {error && <div>Error: {error.message}</div>}
          {isLoaded && search && <h2>Results for: {search}</h2>}
          {!isLoaded && <div>Ready to search iTunes Movies</div>}
        </SearchInfo>
        {items &&
          items.map(item => <SearchItem key={item.trackId} item={item} />)}
      </div>
    );
  }
}
