import React from 'react'
import AddItem from "./AddItem"
import GetInventory from "./GetInventory"
import Save from "./Save"
import CancelAllChanges from "./CancelAllChanges";
import './Tools.css'

export default function Tools(props) {
    return (
        <div className="Tools">
            <AddItem 
                clickHandler={props.clickHandlers.addItem}
            />
            <GetInventory clickHandler={props.clickHandlers.loadInventory}/>
            <Save clickHandler={props.clickHandlers.save}/>
            <CancelAllChanges clickHandler={props.clickHandlers.cancelAllChanges} />
        </div>
    )
}