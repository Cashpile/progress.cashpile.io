import { render } from 'react-dom'

import CacheBuster from 'react-cache-buster'
import packageInfo from '../package.json'

import App from './App'

const isProduction = process.env.NODE_ENV === 'production'

render(
  <CacheBuster
    currentVersion={packageInfo.version}
    isEnabled={isProduction}
    metaFileDirectory={'../public'}
  >
    <App />
  </CacheBuster>,
  document.getElementById('root')
)
