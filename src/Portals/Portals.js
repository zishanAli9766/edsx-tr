import React, { Component } from 'react'
import  ReactDOM  from 'react-dom'

export default class Portals extends Component {
  render() {
    return ReactDOM.createPortal(
      <h1   >Other Root Element</h1>,
      document.getElementById('other-root')
      )
  }
}
