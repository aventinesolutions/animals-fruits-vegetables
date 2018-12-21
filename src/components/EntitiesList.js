import React, { Component } from 'react'
import { EntityConsumer } from './EntityContextProvider'
import NaturalEntity from './NaturalEntity'

class Loading extends Component {
  render() {
    return <h2>Loading {this.props.entityType} ...</h2>
  }
}

class List extends Component {
  render() {
    return this.props.entities.sort((a, b) => a.Title.localeCompare(b.Title)).map((entity) => {
      return <NaturalEntity key={`${this.props.entityType}-${entity.Id}`} {...entity}/>
    })
  }
}

export default class EntitiesList extends Component {
  render() {
    return (
      <EntityConsumer>
        {context => {
          if (context.state.entities.length > 0) {
            return <List key={context.state.entityType} entityType={context.state.entityType} entities={context.state.entities}/>
          }
          return <Loading entityType={context.state.entityType}/>
        }}
      </EntityConsumer>
    )
  }
}