import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Header'
import NaturalEntity from './NaturalEntity'

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
    if (this.state && this.state.entities.length > 0) {
      const list = this.state.entities.sort((a, b) => a.Title.localeCompare(b.Title)).map((entity) => {
        return <NaturalEntity key={entity.Id.toString()} {...entity}/>
      })
      return (
        <div>
          <NavContainer>
            <Header entityType={this.state.entityType}/>
            <NavButton onClick={() => this.handleChange('fruitveg')}>show fruits & vegetables</NavButton>
            <NavButton onClick={() => this.handleChange('animals')}>show animals</NavButton>
          </NavContainer>
          <EntitiesContainer>
            {list}
          </EntitiesContainer>
        </div>
      )
    }
    return (
      <h1>Loading ...</h1>
    )
  }
}