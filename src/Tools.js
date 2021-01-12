import React from 'react'
import AddItem from "./AddItem"
import GetInventory from "./GetInventory"
import './Tools.css'

export default function Tools(props) {
    return (
        <div className="Tools">
            <AddItem 
                clickHandler={props.clickHandlers.addItem}
            />
            <GetInventory clickHandler={props.clickHandlers.loadInventory}/>
        </div>
    )
}