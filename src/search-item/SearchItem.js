import React, { Component } from 'react';
import styled from 'styled-components';
import '../index.css';

const Wrapper = styled.div`
  background: white;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(25, 25, 25, 0.2);
  width: 90vw;
  max-width: 600px;
  margin: auto;
  margin-bottom: 20px;
`;

const WrapperItemLeft = styled.div`
  float: left;
  width: 100%;
  max-width: 100px;
  padding: 20px;
`;

const WrapperItemRight = styled.div`
  margin-left: 120px;
  padding: 20px;
`;

const ItemArtworkImage = styled.img`
  border-radius: 0.1em;
`;

const ItemTitleLink = styled.a`
  color: black;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const ItemTitle = styled.h2`
  margin-top: 0;
`;

const ItemOverview = styled.div`
  color: #3e3e3e;
  font-size: 0.9em;
  margin-bottom: 16px;
`;

const ItemDescription = styled.div`
  color: #5a5a5a;
  font-size: 0.8em;
`;

function ItemArtwork({ artworkUrl100, trackName }) {
  return <ItemArtworkImage src={artworkUrl100} alt={trackName} />;
}

export default class SearchItem extends Component {
  getSearchItemKind(kind) {
    if (kind === 'feature-movie') return 'Movie';
  }

  render() {
    const { item } = this.props;
    const {
      trackName,
      artworkUrl100,
      primaryGenreName,
      trackViewUrl,
      longDescription
    } = item;
    return (
      <Wrapper>
        <WrapperItemLeft>
          <ItemArtwork artworkUrl100={artworkUrl100} alt={trackName} />
        </WrapperItemLeft>
        <WrapperItemRight>
          <ItemTitleLink
            href={trackViewUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ItemTitle>{trackName}</ItemTitle>
          </ItemTitleLink>
          <ItemOverview>{primaryGenreName}</ItemOverview>
          <ItemDescription>{longDescription}</ItemDescription>
        </WrapperItemRight>
      </Wrapper>
    );
  }
}
