import React, { Component } from 'react';

export default class DetailPage extends Component {
  constructor(props) {
    super(props);

    const { match } = this.props;
    const id = match.params.id;

    this.state = {
      item: null,
      loaded: false
    };

    this.loadDataFromApi(id);
  }

  loadDataFromApi(id) {
    fetch(`https://itunes.apple.com/lookup?id=${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      mode: 'cors'
    })
      .then(res => res.json())
      .then(res => {
        if (res) {
          const item = res.results[0];
          this.setState({
            item: item
          });
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const item = this.state.item || 'no';
    return (
      <div>
        <h2>{item.trackName}</h2>
        <p>{item.artistName}</p>
        <img src={item.artworkUrl100} alt="Artwork" />
        <p>{item.longDescription}</p>
      </div>
    );
  }
}
