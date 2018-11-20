import React, { PureComponent } from 'react'

export default class FullsizeImage extends PureComponent {
  render() {
    return (
      <img src={this.props.src} alt={this.props.title}/>
    )
  }
}
