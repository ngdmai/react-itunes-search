import React, { Component } from 'react';
import styled from 'styled-components';
import '../index.css';

const Wrapper = styled.div`
  background: white;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(25, 25, 25, 0.2);
  margin-bottom: 20px;
  overflow: hidden;
`;

const WrapperItemLeft = styled.div`
  float: left;
  width: 100%;
  max-width: 70px;
  padding: 20px;
`;

const WrapperItemRight = styled.div`
  margin-left: 90px;
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

const Overview = styled.div`
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

function ItemOverview({ item }) {
  return (
    <Overview>
      <span>{item.primaryGenreName} - </span>
      <span>{item.contentAdvisoryRating} - </span>
      <span>
        {item.trackPrice} {item.currency} -{' '}
      </span>
      <span>
        {item.trackRentalPrice} {item.currency}
      </span>
    </Overview>
  );
}

export default class SearchItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <Wrapper>
        <WrapperItemLeft>
          <ItemArtwork
            artworkUrl100={item.artworkUrl100}
            alt={item.trackName}
          />
        </WrapperItemLeft>
        <WrapperItemRight>
          <ItemTitleLink
            href={item.trackViewUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ItemTitle>{item.trackName}</ItemTitle>
          </ItemTitleLink>
          <ItemOverview item={item} />
          <ItemDescription>{item.longDescription}</ItemDescription>
        </WrapperItemRight>
      </Wrapper>
    );
  }
}
