import React, { Component } from 'react'
import styled from 'styled-components'
import NaturalEntity from './NaturalEntity'

const EntitiesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export default class NaturalEntities extends Component {
  constructor() {
    super()
    this.state = { entityType: 'animals', entities: [] }
  }

  get source() {
    return `http://styleguide.effectivedigital.com/interview/api/${this.state.entityType}`
  }

  componentDidMount() {
    this.fetchEntities()
  }

  fetchEntities() {
    this.setState({ entityType: this.state.entityType, entities: [] })
    return fetch(this.source).then(response => response.json()).then(payload => this.resolve(payload))
  }

  resolve(payload) {
    this.setState({ entityType: this.state.entityType, entities: payload })
  }

  render() {
    if (this.state && this.state.entities.length > 0) {
      const list = this.state.entities.sort((a, b) => a.Title.localeCompare(b.Title)).map((entity) => {
        console.log(entity)
        return <NaturalEntity key={entity.Id.toString()} {...entity}/>
      })
      return (
        <div>
          <h1>Some Animals</h1>
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