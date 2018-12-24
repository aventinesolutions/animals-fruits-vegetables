import NaturalEntities from './NaturalEntities'

export default class Animals extends NaturalEntities {
  constructor(props) {
    super({...props, entityType: 'animals'})
  }
}
