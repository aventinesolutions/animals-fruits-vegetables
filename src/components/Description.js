import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Content = styled.p`
  font-style: italic;
`
export default class Description extends PureComponent {
  render() {
    return <Content>{this.props.content}</Content>
  }
}
