import React from 'react'
import NaturalEntities from './NaturalEntities'

export default class FruitsVegetables extends NaturalEntities {
  constructor(props) {
    super({...props, entityType: 'fruitsveg'})
  }
}
