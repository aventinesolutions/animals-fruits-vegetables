import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled.button`
  height: 3em;
  margin: 1em;
  padding: 0 1em 0 1em;
  align-self: flex-end;
  background-color: inherit;
  border: 0.15em solid burlywood;
  transition-duration: 0.4s;
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
