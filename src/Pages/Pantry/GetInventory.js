import React, { Component } from 'react'

export default class GetInventory extends Component {
    constructor(props) {
        super(props);

        this.changeHandler = this.changeHandler.bind(this);
        this.loadClickHandler = this.loadClickHandler.bind(this);
        this.createClickHandler = this.createClickHandler.bind(this);

        this.state = {
            inventoryId: "",
            newInventoryName: ""
        }
    }

    changeHandler(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    loadClickHandler() {
        let selectedInventory = this.props.inventories.find((element) => {
            return element._id === this.state.inventoryId;
        })
        this.props.loadClickHandler(selectedInventory);
    }

    createClickHandler() {
        this.props.createClickHandler(this.state.newInventoryName);
    }

    //sets a default value if an inventoryId isn't selected
    componentDidUpdate() {
        //checks if there is no Id set
        if (this.state.inventoryId === "")
        {
            //checks if there is an inventory to set to.
            if (this.props.inventories.length > 0) {
                //sets the id if there is an ID to set to
                let inventoryId = "";
                inventoryId = this.props.inventories[0]._id;
                this.setState({
                    inventoryId: inventoryId
                })
            }
            
        }
    }

    render() {

        let inventoryOptions = []
        if (this.props.inventories){
            //create the inventory options
            inventoryOptions = this.props.inventories.map(element => (
                <option key={element._id} value={element._id}>
                    {element.name}
                </option>
            ));
        }


        return (
            <div className="load-inventory-tool">
                <label>Load Inventory</label>

                <select onChange={this.changeHandler} name="inventoryId" value={this.state.inventoryId}>
                    {inventoryOptions}
                </select>
                <button onClick={this.loadClickHandler}>Load Pantry</button>

                <input onChange={this.changeHandler} name="newInventoryName" value={this.state.newInventoryName}/>
                <button onClick={this.createClickHandler}>Create new Pantry</button>
            </div>
        )
    }
}
