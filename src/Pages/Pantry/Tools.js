import React from 'react'
import AddItem from "./AddItem"
import GetInventory from "./GetInventory"
import Save from "./Save"
import CancelAllChanges from "./CancelAllChanges";
import './Tools.css'

export default function Tools(props) {
    let toolsItems = [<GetInventory key="getInventory" loadClickHandler={props.clickHandlers.loadInventory} createClickHandler={props.clickHandlers.createInventory} inventories={props.inventories}/>];

    if(props.invLoaded) {
        toolsItems.unshift(<AddItem key="addItem" clickHandler={props.clickHandlers.addItem}/>)
        toolsItems.push([<Save key="save" clickHandler={props.clickHandlers.save}/>, <CancelAllChanges key="cancelChanges" clickHandler={props.clickHandlers.cancelAllChanges} />])
    }

    return (
        <div className="Tools">
            {toolsItems}
        </div>
    )
}