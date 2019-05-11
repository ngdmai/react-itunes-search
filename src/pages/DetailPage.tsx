import React, { Component } from 'react';
import { getArtwork } from '../helpers/MovieHelper';
import { ItemOverview } from '../helpers/DescriptionHelper';

interface Props {
  match: any;
  history: any;
}

interface State {
  item: any;
}

export default class DetailPage extends Component<Props, State> {
  state: State = {
    item: null
  };

  constructor(props: Props) {
    super(props);

    const { match, history } = this.props;

    // history has passed data
    const { location } = history;
    const { state } = location;
    const { item } = state;

    if (item) {
      this.state = { item: item };
    } else {
      const id = match.params.id;
      this.loadDataFromApi(id);
    }
  }

  loadDataFromApi(id: string) {
    fetch(`https://itunes.apple.com/search?term=${id}`)
      .then(res => res.json())
      .then(res => {
        if (res) {
          const item = res.results[0];
          this.setState({ item: item });
        }
      });
  }

  goBack = () => {
    const { history } = this.props;

    // pass back search term to search
    const { location } = history;
    const { state } = location;
    const { searchTerm } = state;

    // route to root page
    history.push({
      pathname: '/',
      state: {
        searchTerm: searchTerm
      }
    });
  };

  render() {
    const { item } = this.state;
    const artwork = getArtwork(item.artworkUrl100);

    return (
      <div>
        <button onClick={() => this.goBack()}>Go Back</button>
        <div className="search-item">
          {item && (
            <div>
              <h2>{item.trackName}</h2>
              <p>{item.artistName}</p>
              <div style={{ display: 'flex' }}>
                <div className="search-item-left">
                  <img className="artwork" src={artwork} alt="Artwork" />
                </div>
                <div className="search-item-right">
                  <ItemOverview item={item} />
                  <p className="search-item-description">
                    {item.longDescription}
                  </p>
                  <a
                    className="search-item-title"
                    href={item.trackViewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in iTunes
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
