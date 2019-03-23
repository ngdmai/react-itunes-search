import React, { Component } from 'react';
import { ItemOverview } from '../helpers/DescriptionHelper';

interface Props {
  match: any;
}

interface State {
  item: any;
  loaded: boolean;
}

export default class DetailPage extends Component<Props, State> {
  state: State = {
    item: null,
    loaded: false
  };

  constructor(props: Props) {
    super(props);
    const { match } = this.props;
    const id = match.params.id;
    this.loadDataFromApi(id);
  }

  loadDataFromApi(id: string) {
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
            <p>{item.longDescription}</p>
          </div>
        )}
      </div>
    );
  }
}
