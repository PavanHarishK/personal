import React, { Component } from 'react'

export default class ClassComponet extends Component {
  render() {
    return (
      <div>ClassComponet
      <p>{this.props.sname}</p>
      <p>{this.props.class}</p>
      <p>{this.props.age}</p>
      </div>
    )
  }
}
