import React, { Component } from 'react'
import loading from './spinner.gif'

export default class Loading extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt="loading" style={{width : '40px', height : '40px', display : 'block' , margin : 'auto'}}/>
      </div>
    )
  }
}
