import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 4em;
  background: #d3d8e1;
  max-width: 400px;
  margin: auto;
  margin-bottom: 16px;
`;

const ItemKind = styled.div``;

const ItemTitle = styled.div``;

export default class SearchItem extends Component {
  getSearchItemKind(kind) {
    if (kind === 'feature-movie') return 'Movie';
  }

  render() {
    const { item } = this.props;
    const { key, kind, trackName } = item;
    return (
      <Wrapper key={key}>
        <ItemKind>{this.getSearchItemKind(kind)}</ItemKind>
        <ItemTitle>{trackName}</ItemTitle>
        <img src={item.artworkUrl100} alt={trackName} />
      </Wrapper>
    );
  }
}
