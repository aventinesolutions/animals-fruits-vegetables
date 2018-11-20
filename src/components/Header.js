import React, { PureComponent } from 'react'
import styled from 'styled-components'

const HeaderContent = styled.h1`
   flex-basis: 70%;
`

export default class Header extends PureComponent {
  render() {
    return (
      <HeaderContent>
        {this.props.entityType === 'animals' && 'Some Animals'}
        {this.props.entityType === 'fruitveg' && 'Some Fruits & Vegetables'}
      </HeaderContent>
    )
  }
}