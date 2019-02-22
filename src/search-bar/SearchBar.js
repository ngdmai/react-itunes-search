import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #a9b0be;
  margin-bottom: 16px;
  text-align: center;
  padding: 24px;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || '#596273'};
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
      <Wrapper>
        <Input placeholder="search on itunes" type="text" />
        <Button>Seach</Button>
      </Wrapper>
    );
  }
}
