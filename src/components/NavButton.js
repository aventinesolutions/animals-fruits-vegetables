import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled.button`
  height: 50%;
  align-self: flex-end;
  
  a {
    text-decoration: none;
    min-width: 30em;
  }
`

export default class NavButton extends PureComponent {
  constructor(props) {
    super(props)
    this.linkText = {animals: 'show some animals', fruitsveg: 'show some fruits & vegetables'}
  }

  render() {
    return (
      <Button>
        <Link to={this.props.entityType}>{this.linkText[this.props.entityType]}</Link>
      </Button>
    )
  }
}
