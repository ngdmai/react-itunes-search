import React, { Component } from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  margin-bottom: 16px;
  text-align: center;
  padding: 24px;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #596273;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export default class SearchBar extends Component {
  render() {
    return (
      <SearchBarWrapper>
        <Input
          type="text"
          placeholder="search on itunes"
          onChange={e => {
            this.props.onChange(e.target.value);
          }}
          onKeyPress={e => this.props.onKeyPress(e)}
        />
        <Button onClick={() => this.props.onPress()}>Search</Button>
      </SearchBarWrapper>
    );
  }
}
