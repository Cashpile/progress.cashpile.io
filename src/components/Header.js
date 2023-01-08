import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import numWords from 'num-words'
import capitalize from 'capitalize'

import BackArrow from './BackArrow'
import cacheCheck from '../utils/cacheCheck'

const headerText = 'Cashpile: N&W S2 Updates'

class HeaderContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showBackArrow: false,
      headerText: headerText,
    }
    this.unlisten = this.props.history.listen((location, action) => {
      if (location.pathname === '/') {
        this.setShowBackArrow(false)
        this.setHeaderText(headerText)
      } else {
        this.setShowBackArrow(true)
        this.setHeaderText(
          'Week' +
            ' ' +
            capitalize(numWords(location.pathname.replace('/', '')))
        )
      }
    })
  }

  setShowBackArrow = (value) => {
    this.setState({ showBackArrow: value })
  }

  setHeaderText = (value) => {
    this.setState({ headerText: value })
  }

  componentDidMount() {
    cacheCheck()
    if (this.props.location.pathname === '/') {
      this.setShowBackArrow(false)
      this.setHeaderText(headerText)
    } else {
      this.setShowBackArrow(true)
      this.setHeaderText(
        'Week' +
          ' ' +
          capitalize(numWords(this.props.location.pathname.replace('/', '')))
      )
    }
  }

  render() {
    return (
      <header>
        <div className='header'>
          {this.state.showBackArrow ? <BackArrow /> : <div></div>}
          <div style={{ width: '20vw' }}></div>
          <Link to='/' className='noUnderline'>
            <h1 className='logo'>{this.state.headerText}</h1>
          </Link>
          <div style={{ width: '10vw' }}></div>
          <div style={{ width: '2vw' }}></div>
          <a href='https://cashpile.io' target='_blank'>
            <img
              src='https://assets.cashpile.io/web/www/icons/shape-transparent.png'
              style={{ width: '3vw' }}
            />
          </a>
          <div style={{ width: '5vw' }}></div>
        </div>
      </header>
    )
  }
}

export default withRouter(HeaderContainer)
