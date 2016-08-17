import React from 'react'
import Button from './Button.js'
import Item from './Item.js'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {items: []}
    this.addToItems = this.addToItems.bind(this)
  }

  addToItems (item) {
    var newItems = this.state.items
    newItems.push(item)
    this.setState({items: newItems})
    console.log(this.state.items)
  }

  renderItems () {
    return this.state.items.map((itemText) => {
        return (<Item name={itemText} />)
      }
    )
  }

  render () {
    return (
      <div>
        <h1>APP:</h1>
        <Button addToItems={this.addToItems}/>
        {this.renderItems()}
      </div>
    )
  }
}
