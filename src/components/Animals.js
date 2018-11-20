import React, { Component } from 'react'
import styled from 'styled-components';
import Animal from './Animal'

const AnimalContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export default class Animals extends Component {
  static get source() {
    return 'http://styleguide.effectivedigital.com/interview/api/animals'
  }

  componentDidMount() {
    this.fetchAnimals()
  }

  fetchAnimals() {
    this.setState({animals: []});
    return fetch(Animals.source).then(response => response.json()).then(payload => this.resolve(payload))
  }

  resolve(payload) {
    this.setState({ animals: payload })
  }

  render() {
    if (this.state && this.state.animals.length > 0) {
      const list = this.state.animals.sort((a, b) => a.Title.localeCompare(b.Title)).map((animal) => {
        console.log(animal);
        return <Animal key={animal.Id.toString()} {...animal}/>
      })
      return (
        <div>
          <h1>Some Animals</h1>
          <AnimalContainer>
            {list}
          </AnimalContainer>
        </div>
      )
    }
    return (
      <h1>Loading ...</h1>
    )
  }
}