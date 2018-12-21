import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'

import Animals from './components/Animals'
import FruitsVegetables from './components/FruitsVegetables'

const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={Animals}/>
      <Route path='/fruitsveg' component={FruitsVegetables}/>
      <Route path='/animals' component={Animals}/>
    </div>
  </Router>
)

export default App
