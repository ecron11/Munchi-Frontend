import Tools from "./Tools"
import Inventory from './Inventory'

import React, { Component } from 'react'

export default class Pantry extends Component {

  constructor(props) {
    
    super(props)

    this.addItemHandler = this.addItemHandler.bind(this);
    this.deleteItemHandler = this.deleteItemHandler.bind(this);
    this.decrementHandler = this.decrementHandler.bind(this);
    this.incrementHandler = this.incrementHandler.bind(this);
    this.qtyChangeHandler = this.qtyChangeHandler.bind(this);
    this.cancelAllChanges = this.cancelAllChanges.bind(this);
    this.save = this.save.bind(this);
    this.loadInventory = this.loadInventory.bind(this);

    this.state = {
      currentInventoryID: "",
      inventoryItems : [],
      itemsToRemove : [],
      lastSavedState: []
    }
  }
  

  save() {

    let updateItems = [];
    let addItems = [];

    this.state.inventoryItems.forEach((item, index) => {
      //If the item is changed it must be added to the database, or updated if it hasn't been already.
      //if not, don't update
      if (item.changed) {
        if(item.inDb) {
          //create new item to add to array
          let updateItem = {
            id : item._id,
            name : item.name,
            qty : item.qty,
            qtyUnit : item.qtyUnit
          }
          updateItems.push(updateItem);
        } else {
          let addItem = {
            id : item._id,
            name : item.name,
            qty : item.qty,
            qtyUnit : item.qtyUnit,
            index : index // To add database id's for new items after API call
          }
          addItems.push(addItem);
        }}});
      
      //Set the state of all of the items to be in database and unchanged
      //TODO move til after API call is returned. After UI is disabled
      this.setState((state, props) => {
        let newItems = [...state.inventoryItems];
        //Set each item to in database and unchanged
        newItems.forEach((item ,index) => {
          item.inDb = true;
          item.changed = false;
          item.initialQty = item.qty;
        })
        return {
          inventoryItems: newItems
        }
      })

      //send delete requests
      this.state.itemsToRemove.forEach((item) => {
        fetch(`http://localhost:3000/deleteInventoryItemByID/${item._id}`, {method: 'DELETE'})
        .then(response => response.json())
        .then(data => {
          console.log(`Item with name: ${item.name} and id ${item._id} deleted`);
        })
      });

      //remove all the remove items array as they are removed from the db now
      this.setState({
        itemsToRemove: []
      });

      //send update requests
      updateItems.forEach((item) => {
        fetch(`http://localhost:3000/updateInventoryItemByID/`, {
          method: "PUT",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          body:  JSON.stringify(item)
        })
        .then(response => response.json())
        .then(data => {
          console.log(`Item with name: ${item.name} and id ${item.id} updated`);
        })
      })

      //send add requests
      addItems.forEach(item => {
        item.inventoryId = this.state.currentInventoryID;
        fetch(`http://localhost:3000/createInventoryItem/`, {
          method: "POST",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          body:  JSON.stringify(item)
        })
        .then(response => response.json())
        .then(data => {
          //update the item's id in the state
          this.setState((state) => {
            let newInventoryItems = state.inventoryItems;
            newInventoryItems[item.index]._id = data.item._id;
            return {
              inventoryItems: newInventoryItems
            }
          })
          console.log(item);
          console.log(data);
          console.log(`Item with name: ${item.name} and id: ${data.item._id} added`);
        })
      })

      
      
  }
  
  //loads an inventory from the API
  loadInventory(inventoryId) {
    fetch(`${this.props.apiUrl}/getInventoryItemsByInventoryId/${inventoryId}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(response => response.json()) //converts the response when received
    .then(data => { //after the response has been received do what you want with it. In this case load the inventory items into the state
      let newInventoryItems = data.items;
      newInventoryItems.forEach(item => {
        //Add the local properties for each object
        item.inDb = true;
        item.changed = false;
        item.initialQty = item.qty;
        });

      //create copy of items for last saved state property
      //Need to iterate this way to make sure that enitrely new objects are created, not just an array of references to them

      let lastSavedState = []
      newInventoryItems.forEach(item => {
        lastSavedState.push({...item});
      })
      this.setState({
        inventoryItems: newInventoryItems,
        currentInventoryID: inventoryId,
        itemsToRemove: [],
        lastSavedState: lastSavedState
      });
      }
    )
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

  //Removes all changes by reverting to inventory state stored in inital state.
  cancelAllChanges() {
    this.setState((state) => {
      //create a new array of new objects. Need to have an array of enitrely new object not just references to them
      let newInventoryItems = [];
      state.lastSavedState.forEach(item => {
        newInventoryItems.push({...item});
      })
      return {
        inventoryItems: newInventoryItems
      }
    })
  }

  //handler for deleting an item at an index
  deleteItemHandler(index) {
    this.setState((state, props) => {
      let newItems = [...state.inventoryItems];
      //remove one item at the desired index. Splice makes a sub-array so need to take the 1st index to get the item
      let deletedItem = newItems.splice(index,1)[0]; 

      console.log(deletedItem);
      let itemsToRemove = state.itemsToRemove
      //determine if an item should be added to the delete array if deleted. 
      //If in the delete array, a delete request for the item must be sent to the server. 
      //Only items that were in the DB before and need to be removed should be added to the delete array.
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
    //Create an object containing the different click handlers for the tools buttons
    let toolsHandlers = {
      addItem: this.addItemHandler,
      loadInventory: this.loadInventory, //TODO call another function that loads animation and promise
      save: this.save,
      cancelAllChanges: this.cancelAllChanges
    }

    return (
      <div>
        <Tools clickHandlers={toolsHandlers}/>
        <Inventory 
          
          inventoryName={this.state.currentInventoryID}
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

