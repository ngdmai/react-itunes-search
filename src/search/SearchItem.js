import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ItemOverview } from '../helpers/DescriptionHelper';

export default class SearchItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="search-item">
        <div className="search-item-left">
          <img
            className="artwork"
            src={item.artworkUrl100}
            alt={item.trackName}
          />
        </div>
        <div className="search-item-right">
          <a
            className="search-item-title"
            href={item.trackViewUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>{item.trackName}</h2>
          </a>
          <ItemOverview item={item} />
          <div className="search-item-description">{item.longDescription}</div>
          <Link to={`/movie/${item.trackId}`}>Details</Link>
        </div>
      </div>
    );
  }
}
