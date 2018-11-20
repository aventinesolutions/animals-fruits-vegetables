import React, { PureComponent } from 'react';

export default class Thumbnail extends PureComponent {
  render() {
    return (
      <img src={this.props.src} alt={this.props.title}/>
    )
  }
}
