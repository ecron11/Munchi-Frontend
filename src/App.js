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
    this.decrementHandler = this.decrementHandler.bind(this);
    this.incrementHandler = this.incrementHandler.bind(this);
    this.qtyChangeHandler = this.qtyChangeHandler.bind(this);
    this.save = this.save.bind(this);
    this.fetchInventoryItems = this.fetchInventoryItems.bind(this);

    this.state = {
       inventoryItems : [],
       itemsToRemove : []
    }
  }

  //fetches the inventory items based on an inventory ID
  fetchInventoryItems() {
    
  }

  save() {
    //Create add items array
    //Create update items array
    //iterate through items and assign to each array
    //send delete items request
    //send update items request
    //send add items request
  }
  
  //handler for adding items
  addItemHandler(itemName, itemQty, itemQtyUnit) {
    this.setState((state, props) => {
      let newItem = {
        name: itemName,
        qty: itemQty,
        qtyUnit: itemQtyUnit,
        changed: true,
        inDb: false, //if item is in the database already
        initialQty: itemQty //used to determine if item has changed from original value and update needs to be sent to server
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
      let deletedItem = newItems.splice(index);

      let itemsToRemove = state.itemsToRemove
      //determine if an item should be added to the delete array if deleted. If in the delete array, a delete request for the item must be sent to the server. Only items that were in the DB before and need to be removed should be added to the delete array.
      if (deletedItem.inDb) {
        itemsToRemove.push(deletedItem);
      }
      return {
        inventoryItems: newItems,
        itemsToRemove: itemsToRemove
      }
    })
  }

  qtyChangeHandler(index, newQty) {
    this.setState((state, props) => {
      let newItems = [...state.inventoryItems];
      newItems[index].qty = newQty;
      //check to see if qty changed from initial state and if it is in the database
      if (newItems[index].qty === newItems[index].initialQty && newItems[index].inDb) {
        newItems[index].changed = false
      } else newItems[index].changed = true
      return {
        inventoryItems: newItems
      };
    })
  }

  //handler for decrement the count in an inventory item
  decrementHandler(index) {
    this.setState((state, props) => {
      let newItems = [...state.inventoryItems];
      newItems[index].qty--;
       //check to see if qty changed from initial state and if it is in the database
       if (newItems[index].qty === newItems[index].initialQty && newItems[index].inDb) {
        newItems[index].changed = false
      } else newItems[index].changed = true
      return {
        inventoryItems: newItems
      }
    })
  }

  //handler for incrementing the count in an inventory item
  incrementHandler(index) {
    this.setState((state, props) => {
      let newItems = [...state.inventoryItems];
      newItems[index].qty++;
       //check to see if qty changed from initial state and if it is in the database
       if (newItems[index].qty === newItems[index].initialQty && newItems[index].inDb) {
        newItems[index].changed = false
      } else newItems[index].changed = true
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
          qtyChangeHandler={this.qtyChangeHandler}
          deleteHandler={this.deleteItemHandler}
          decrementHandler={this.decrementHandler}
          incrementHandler={this.incrementHandler}
        />
      </div>
    )
  }
}

