import React, { Component } from "react";
import SearchItem from "../search-item/SearchItem";
import styled from "styled-components";

const Wrapper = styled.div``;

const SearchInfo = styled.div`
  margin-bottom: 16px;
  text-align: center;
`;

export default class SearchResult extends Component {
  filterSearchResults(result) {
    return result.kind === "feature-movie";
  }

  render() {
    const { search, error, isLoaded, items } = this.props;
    return (
      <Wrapper>
        <SearchInfo>
          {error && <div>Error: {error.message}</div>}
          {!isLoaded && <div>Loading...</div>}
          {isLoaded && search && <h2>Results for: {search}</h2>}
        </SearchInfo>
        {items &&
          items
            .filter(item => this.filterSearchResults(item))
            .map(item => <SearchItem key={item.trackId} item={item} />)}
      </Wrapper>
    );
  }
}
