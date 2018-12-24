import React, { Component } from 'react'
import styled from 'styled-components'
import { EntityProvider } from './EntityContextProvider'
import EntitiesList from './EntitiesList'
import Navigation from './Navigation'

const EntitiesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
export default class NaturalEntities extends Component {
  constructor(props) {
    super(props)
    this.state = { entityType: this.props.entitytType || 'animals', entities: [] }
  }

  get source() {
    return `http://styleguide.effectivedigital.com/interview/api/${this.state.entityType}`
  }

  componentDidMount() {
    this.fetchEntities()
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
        <Navigation currentType={this.state.entityType}/>
        <EntitiesContainer>
          <EntitiesList/>
        </EntitiesContainer>
        {this.props.children}
      </EntityProvider>
    )
  }
}
