import React, { Component } from 'react';
import { ItemOverview } from '../helpers/DescriptionHelper';

export default class DetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: null,
      loaded: false
    };

    const { match } = this.props;
    const id = match.params.id;
    this.loadDataFromApi(id);
  }

  loadDataFromApi(id) {
    fetch(`https://itunes.apple.com/search?term=${id}`)
      .then(res => res.json())
      .then(res => {
        if (res) {
          const item = res.results[0];
          this.setState({ item: item, loaded: true });
        }
      });
  }

  render() {
    const { item, loaded } = this.state;
    return (
      <div className="search-item">
        {loaded && (
          <div>
            <h2>{item.trackName}</h2>
            <p>{item.artistName}</p>
            <img src={item.artworkUrl100} alt="Artwork" />
            <ItemOverview item={item} />
            <p>{item.longDescription}</p>
          </div>
        )}
      </div>
    );
  }
}
