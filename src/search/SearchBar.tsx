import React, { Component } from 'react';

interface Props {
  onChange(value: string): void;
  onKeyPress(e: React.KeyboardEvent): void;
  onPress(): void;
}

export default class SearchBar extends Component<Props> {
  render() {
    const { onChange, onKeyPress, onPress } = this.props;
    return (
      <div className="search-bar">
        <input
          type="text"
          className="search-input-field"
          placeholder="search on itunes"
          onChange={e => {
            onChange(e.target.value);
          }}
          onKeyPress={e => onKeyPress(e)}
        />
        <button className="search-button" onClick={() => onPress()}>
          Search
        </button>
      </div>
    );
  }
}
