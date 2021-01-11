import React, { Component } from 'react'
import './Tools.css'

export default class Tools extends Component {
    constructor(props) {
        super(props)
        
        this.changeHandler = this.changeHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);

        this.state = {
            itemName: "",
            itemQty: "",
            itemQtyUnit: ""
        }
    }
    
    //sets form input based names
    changeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //Handler for the click event calls handler sent down in props. 
    clickHandler() {
        this.props.clickHandler(this.state.itemName, Number(this.state.itemQty), this.state.itemQtyUnit)
        this.setState({
            itemName: "",
            itemQty: "",
            itemQtyUnit: ""
        })
    }

    render() {
        return (
            <div className="Tools">
                <label htmlFor="itemName">Item Name</label>
                <input onChange={this.changeHandler} name="itemName" value={this.state.itemName}/>
                <label htmlFor="itemQty">Quantity</label>
                <input onChange={this.changeHandler} name="itemQty" value={this.state.itemQty}/>
                <label htmlFor="itemQtyUnit">Unit</label>
                <input onChange={this.changeHandler} name="itemQtyUnit" value={this.state.itemQtyUnit} placeholder="Pounds, bunches, etc.." />
                <button onClick={this.clickHandler}>Add New Item</button>
            </div>
        )
    }
}
