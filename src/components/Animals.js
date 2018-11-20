import React, { Component } from 'react'
import Animal from './Animal'

export default class Animals extends Component {
  componentDidMount() {
    this.fetchAnimals()
  }

  get source() {
    return 'http://styleguide.effectivedigital.com/interview/api/animals'
  }

  fetchAnimals() {
    this.setState({animals: []});
    return fetch(this.source).then(response => response.json()).then(payload => this.resolve(payload))
  }

  resolve(payload) {
    this.setState({ animals: payload })
  }

  render() {
    if (this.state && this.state.animals.length > 0) {
      const list = this.state.animals.map((animal) => {
        console.log(animal);
        return (
          <Animal key={animal.Id.toString()} {...animal}/>
        )
      })
      return (
        <div>
          <h1>Some Animals</h1>
          <ul>
            {list}
          </ul>
        </div>
      )
    }
    return (
      <h1>Loading ...</h1>
    )
  }
}