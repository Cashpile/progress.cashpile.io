import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import BackArrow from './BackArrow'

class HeaderContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showBackArrow: false,
    }
  }

  setShowBackArrow = (value) => {
    this.setState({ showBackArrow: value })
  }

  componentDidMount() {
    if (this.props.location.pathname === '/') {
      this.setShowBackArrow(false)
    } else {
      this.setShowBackArrow(true)
    }
  }

  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      if (location.pathname === '/') {
        this.setShowBackArrow(false)
      } else {
        this.setShowBackArrow(true)
      }
    })
  }

  componentWillUnmount() {
    this.unlisten()
  }

  render() {
    return (
      <header>
        <div className='header'>
          {this.state.showBackArrow ? <BackArrow /> : <div></div>}
          <div style={{ width: '20vw' }}></div>
          <Link to='/' className='noUnderline'>
            <h1 className='logo'>Nights & Weekends S2</h1>
          </Link>
          <div style={{ width: '20vw' }}></div>
        </div>
      </header>
    )
  }
}

export default withRouter(HeaderContainer)
