import React, { Component } from 'react'
import styled from 'styled-components'
import { EntityProvider } from './EntityContextProvider'
import Header from './Header'
import EntitiesList from './EntitiesList'

const EntitiesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const NavContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
`

const NavButton = styled.button`
  height: 50%;
  align-self: flex-end;
`

export default class NaturalEntities extends Component {
  constructor() {
    super()
    this.state = { entityType: 'animals', entities: [] }
    this.handleChange = this.handleChange.bind(this)
  }

  get source() {
    return `http://styleguide.effectivedigital.com/interview/api/${this.state.entityType}`
  }

  componentDidMount() {
    this.fetchEntities()
  }

  handleChange(entityType) {
    this.setState({ entityType: entityType, entities: [] })
    this.fetchEntities(entityType)
  }

  fetchEntities() {
    return fetch(this.source).then(response => response.json()).then(payload => this.resolve(payload))
  }

  resolve(payload) {
    this.setState({ entityType: this.state.entityType, entities: payload })
  }

  render() {
    return (
      <EntityProvider value={{state: this.state}}>
        <NavContainer>
          <Header entityType={this.state.entityType}/>
          <NavButton onClick={() => this.handleChange('fruitveg')}>show fruits & vegetables</NavButton>
          <NavButton onClick={() => this.handleChange('animals')}>show animals</NavButton>
        </NavContainer>
        <EntitiesContainer>
          <EntitiesList/>
        </EntitiesContainer>
        {this.props.children}
      </EntityProvider>
    )
  }
}
