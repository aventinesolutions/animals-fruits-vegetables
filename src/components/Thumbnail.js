import React, { PureComponent } from 'react';
import styled from 'styled-components';

export default class Thumbnail extends PureComponent {
  render() {
    console.log(this.props)
    return (
      <img src={this.props.src} alt={this.props.title}/>
    );
  }
}
