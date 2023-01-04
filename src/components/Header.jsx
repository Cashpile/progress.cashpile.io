import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import numWords from 'num-words'
import capitalize from 'capitalize'

import BackArrow from './BackArrow'

const headerText = 'N&W S2 - Weekly Updates'

class HeaderContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showBackArrow: false,
      headerText: headerText,
    }
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

  componentWillMount() {
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

  render() {
    return (
      <header>
        <div className='header'>
          {this.state.showBackArrow ? <BackArrow /> : <div></div>}
          <div style={{ width: '20vw' }}></div>
          <Link to='/' className='noUnderline'>
            <h1 className='logo'>{this.state.headerText}</h1>
          </Link>
          <div style={{ width: '20vw' }}></div>
        </div>
      </header>
    )
  }
}

export default withRouter(HeaderContainer)
