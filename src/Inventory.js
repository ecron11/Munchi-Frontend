import React from 'react'

export default function Inventory(props) {
    let InventoryCards = props.inventoryItems.map((item, index) => 
        <div key={index}>
            <p>{`${item.name} - ${item.qty} ${item.qtyUnit}`}</p>
            <button onClick={() => props.deleteHandler(index)}>Delete Item</button>
        </div>
        )

    return (
        <div>
            {InventoryCards}
        </div>
    )
}
