import React, { Component } from 'react'
import lodding from './lodding.gif'
export default class Spinner extends Component {
  render() {
    return (
    <div className="position-relative">
        <div className="position-absolute top-50 start-50 translate-middle">
            <img src={lodding} alt='lodding'/>
        </div>
    </div>
    )
  }
}
