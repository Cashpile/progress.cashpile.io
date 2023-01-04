import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Week_0 from './pages/weeks/0'
import Week_1 from './pages/weeks/1'
import Week_2 from './pages/weeks/2'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/0' component={Week_0} />
      <Route path='/1' component={Week_1} />
      <Route path='/2' component={Week_2} />
    </BrowserRouter>
  )
}

export default App