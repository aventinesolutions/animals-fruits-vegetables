import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { EntityConsumer } from './EntityContextProvider'
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
      <EntityConsumer>
        {(context) => {
          const entityType = context.state.entityType
          const other = context.state.entityType === 'animals' ? 'fruitsveg' : 'animals'
          return (
            <NavContainer>
              <Header entityType={entityType}/>
              <NavButton><Link to={other}>show fruits & vegetables</Link></NavButton>
            </NavContainer>
          )
        }}
      </EntityConsumer>
    )
  }
}
