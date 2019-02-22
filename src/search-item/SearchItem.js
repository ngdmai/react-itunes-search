import React, { Component } from 'react';
import styled from 'styled-components';
import '../index.css';

const Wrapper = styled.div`
  max-width: 600px;
  margin: auto;
  margin-bottom: 64px;
`;

const WrapperItemLeft = styled.div`
  float: left;
  width: 180px;
`;

const WrapperItemRight = styled.div`
  margin-left: 180px;
`;

const ItemArtworkImage = styled.img`
  border-radius: 0.3em;
  height: 250px;
`;

const ItemTitle = styled.h2``;

const ItemOverview = styled.div`
  font-color: grey;
  margin-bottom: 16px;
`;

const ItemDescription = styled.div`
  font-size: 0.8em;
  margin-bottom: 32px;
`;

const ItemViewFooter = styled.div`
  text-align: right;
`;

const ItemViewUrl = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 7rem;
  text-align: center;
  color: black;
  border: 2px solid black;
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
          <ItemTitle>{trackName}</ItemTitle>
          <ItemOverview>{primaryGenreName}</ItemOverview>
          <ItemDescription>{longDescription}</ItemDescription>
          <ItemViewFooter>
            <ItemViewUrl href={trackViewUrl} target="_blank">
              Link to iTunes
            </ItemViewUrl>
          </ItemViewFooter>
        </WrapperItemRight>
      </Wrapper>
    );
  }
}
