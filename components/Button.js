import React from 'react'


export default class Button extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.addToItems("Name")
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick}/>
      </div>
    )
  }
}
