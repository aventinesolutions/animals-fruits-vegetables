import React, { Component } from 'react';
import styled from 'styled-components';

const AnimalContainer = styled.li`
  list-style: none;
  flex: 2 20em;
`

export default class Animal extends Component {
  render() {
    return (
      <AnimalContainer>
        {this.props.Title}
      </AnimalContainer>
    );
  }
}
