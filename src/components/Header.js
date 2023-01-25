import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import numWords from 'num-words'
import capitalize from 'capitalize'

import BackArrow from './BackArrow'

const headerText = 'Cashpile – N&W Updates'

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
          <a href='https://cashpile.io' target='_blank'>
            <img src='/images/logo.png' style={{ width: '7.5vh' }} />
          </a>
          <div style={{ width: '7vw' }}></div>
        </div>
      </header>
    )
  }
}

export default withRouter(HeaderContainer)
