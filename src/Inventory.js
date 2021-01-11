import React from 'react'

export default function Inventory(props) {
    let InventoryCards = props.inventoryItems.map((item, index) => 
        <div key={index}>
            <span>{item.name} - </span>
            <button onClick={() => props.decrementHandler(index)}>-</button>
            <input 
                onChange={(event) => props.qtyChangeHandler(index, event.target.value)} 
                value={item.qty}
                /> 
            <button onClick={() => props.incrementHandler(index)}>+</button>
            <span> {item.qtyUnit} </span>
            <button onClick={() => props.deleteHandler(index)}>Delete Item</button>
        </div>
        )

    return (
        <div>
            {InventoryCards}
        </div>
    )
}
