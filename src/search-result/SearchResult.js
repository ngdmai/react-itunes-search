import React, { Component } from 'react';
import SearchItem from '../search-item/SearchItem';

export default class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch('https://itunes.apple.com/search?term=jake+johnson&limit=10')
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          items: result.results
        });
      });
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {items.map(item => (
            <SearchItem item={item} />
          ))}
        </div>
      );
    }
  }
}
