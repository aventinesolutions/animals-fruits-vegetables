import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Header from './Header'

const NavContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
`

const NavButton = styled.button`
  height: 50%;
  align-self: flex-end;
`

export default class Navigation extends PureComponent {
  render() {
    return (
      <NavContainer>
        <Header entityType={this.props.currentType}/>
        <NavButton><Link to='fruitsveg'>show fruits & vegetables</Link></NavButton>
        <NavButton><Link to='animals'>show animals</Link></NavButton>
      </NavContainer>
    )
  }
}
