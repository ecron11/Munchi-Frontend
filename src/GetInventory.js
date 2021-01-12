import React, { Component } from 'react'

export default class GetInventory extends Component {
    constructor(props) {
        super(props);

        this.changeHandler = this.changeHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);

        this.state = {
            inventoryId: ""
        }
    }

    changeHandler(event) {
        this.setState({
            inventoryId: event.target.value
        })
    }

    clickHandler() {
        this.props.clickHandler(this.state.inventoryId);
        this.setState({
            inventoryId: ""
        })
    }

    render() {
        return (
            <div className="load-inventory-tool">
                <label>Load Inventory</label>
                <input onChange={this.changeHandler} name="inventoryId" value={this.state.inventoryId}/>
                <button onClick={this.clickHandler}>Load</button>
            </div>
        )
    }
}
