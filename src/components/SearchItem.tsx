import React, { Component } from 'react';
import { ItemOverview } from '../helpers/DescriptionHelper';
import { getArtwork } from '../helpers/MovieHelper';

interface Props {
  item: any;
  searchTerm: string;
  history: any;
}

export default class SearchItem extends Component<Props> {
  openItem = (item: any) => {
    const { searchTerm, history } = this.props;

    history.push({
      pathname: '/movie/' + item.trackId,
      state: {
        item: item,
        searchTerm: searchTerm
      }
    });
  };

  render() {
    const { item } = this.props;
    const { artworkUrl100 } = item;

    const artwork = getArtwork(artworkUrl100);

    return (
      <div className="search-item">
        <div className="search-item-left">
          <img className="artwork" src={artwork} alt={item.trackName} />
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
          <button onClick={() => this.openItem(item)}>Details</button>
        </div>
      </div>
    );
  }
}
