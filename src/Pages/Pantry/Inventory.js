import React from 'react'
import './inventory.css'

export default function Inventory(props) {
    let InventoryCards = props.inventoryItems.map((item, index) => 
        <div key={index} className={item.changed ? "changed-item" : "unchanged-item"}>
            <span>{item.name} - </span>
            <button onClick={() => props.decrementHandler(index)}>-</button>
            <input 
                onChange={(event) => props.qtyChangeHandler(index, Number(event.target.value))} 
                value={item.qty}
                /> 
            <button onClick={() => props.incrementHandler(index)}>+</button>
            <span> {item.qtyUnit} </span>
            <button onClick={() => props.deleteHandler(index)}>Delete Item</button>
        </div>
        )

    return (
        <div>
            <h2>Currently working on inventory : {props.inventoryName}</h2>
            {InventoryCards}
        </div>
    )
}
