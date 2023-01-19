import React from 'react'

export class Loading extends React.Component {
  constructor() {
    this.state = { isLoading: true }
  }

  componentDidMount() {
    this.setState({ isLoading: false })
  }

  render() {
    return this.state.isLoading ? loading : Page()
  }
}
