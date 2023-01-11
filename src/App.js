import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header'

import Home from './pages/Home'
import Week_0 from './pages/weeks/week-0'
import Week_1 from './pages/weeks/week-1'
import Week_2 from './pages/weeks/week-2'
import Week_3 from './pages/weeks/week-3'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/0' component={Week_0} />
      <Route path='/1' component={Week_1} />
      <Route path='/2' component={Week_2} />
      <Route path='/3' component={Week_3} />
    </BrowserRouter>
  )
}

export default App
