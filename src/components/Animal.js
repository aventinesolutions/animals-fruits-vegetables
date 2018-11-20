import React, { Component } from 'react';

export default class Animal extends Component {
  render() {
    return (
      <li>
        {this.props.Title}
      </li>
    );
  }
}
