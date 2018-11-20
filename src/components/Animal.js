import React, { Component } from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail'
import Description from './Description'

const AnimalContainer = styled.li`
  list-style: none;
  flex: 2 20em;
  padding: 1em;
  margin: 2em;
  border: 0.2em solid burlywood;
`

export default class Animal extends Component {
  render() {
    return (
      <AnimalContainer>
        <Thumbnail title={this.props.Title} src={this.props.ImageURLs.Thumb}/>
        <h2>{this.props.Title}</h2>
        <Description content={this.props.Description}/>
      </AnimalContainer>
    );
  }
}
