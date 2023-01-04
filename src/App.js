import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import CacheBuster from 'react-cache-buster'
import packageInfo from '../package.json'

import Header from './components/Header'

import Home from './pages/Home'
import Week_0 from './pages/weeks/0'
import Week_1 from './pages/weeks/1'
import Week_2 from './pages/weeks/2'

const App = () => {
  const isProduction = process.env.NODE_ENV === 'production'
  return (
    <CacheBuster
      currentVersion={packageInfo.version}
      isEnabled={isProduction}
      isVerboseMode={true}
      metaFileDirectory={'public'}
    >
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/0' component={Week_0} />
        <Route path='/1' component={Week_1} />
        <Route path='/2' component={Week_2} />
      </BrowserRouter>
    </CacheBuster>
  )
}

export default App
