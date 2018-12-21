import React, { Component, lazy } from 'react'
import './App.css'
import NaturalEntities from './components/NaturalEntities'

const Animals = lazy(() => import('./components/Animals'))
const FruitsVegetables = lazy(() => import('./components/FruitsVegetables'))

class App extends Component {
  constructor(props) {
    super(props)
    this.props.version = '1.1.0'
  }

  componentDidMount() {
    console.log(Animals, FruitsVegetables)
  }

  render() {
    return (
      <div className="App">
        <NaturalEntities/>
      </div>
    )
  }
}

export default App
