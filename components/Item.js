import React from 'react'

export default class Item extends React.Component {
  constructor (props) {
    super(props)
  }

  handleClick () {

  }

  render () {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <button onClick={this.handleClick}/>
      </div>
    )
  }
}
