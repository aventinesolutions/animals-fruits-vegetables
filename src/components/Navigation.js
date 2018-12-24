import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { EntityConsumer } from './EntityContextProvider'
import Header from './Header'
import NavButton from './NavButton'

const NavContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
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
              <NavButton entityType={other}/>
            </NavContainer>
          )
        }}
      </EntityConsumer>
    )
  }
}
