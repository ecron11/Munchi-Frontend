import './App.css';
import TopNav from "./TopNav"
import Tools from "./Tools"
import Inventory from './Inventory'

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.addItemHandler = this.addItemHandler.bind(this);
    this.deleteItemHandler = this.deleteItemHandler.bind(this);

    this.state = {
       inventoryItems : []
    }
  }
  
  //handler for adding items
  addItemHandler(itemName, itemQty, itemQtyUnit) {
    this.setState((state, props) => {
      let newItem = {
        name: itemName,
        qty: itemQty,
        qtyUnit: itemQtyUnit
      }

      let newItems = [...state.inventoryItems, newItem];
      return {
        inventoryItems: newItems
      }
    })
  }

  //handler for deleting an item at an index
  deleteItemHandler(index) {
    this.setState((state, props) => {
      let newItems = [...state.inventoryItems];
      newItems.splice(index);
      return {
        inventoryItems: newItems
      }
    })
  }

  render() {
    return (
      <div>
        <TopNav />
        <Tools clickHandler={this.addItemHandler}/>
        <Inventory 
          inventoryItems={this.state.inventoryItems} 
          deleteHandler={this.deleteItemHandler}/>
      </div>
    )
  }
}

