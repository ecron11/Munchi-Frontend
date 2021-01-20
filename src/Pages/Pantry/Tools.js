import React from 'react'
import AddItem from "./AddItem"
import GetInventory from "./GetInventory"
import Save from "./Save"
import CancelAllChanges from "./CancelAllChanges";
import './Tools.css'
import { Navbar } from 'react-bootstrap';

export default function Tools(props) {
    let colorVariantPrimary = "warning";
    let colorVariantSecondary = "info"
    let toolsItems = [
        <GetInventory 
            bgVariant={colorVariantPrimary} 
            btnVariant={colorVariantSecondary} 
            key="getInventory" 
            loadClickHandler={props.clickHandlers.loadInventory} 
            createClickHandler={props.clickHandlers.createInventory} 
            inventories={props.inventories}/>
    ];

    if(props.invLoaded) {
        toolsItems.unshift(
            <AddItem 
            bgVariant={colorVariantPrimary} 
            btnVariant={colorVariantSecondary} 
            key="addItem" 
            clickHandler={props.clickHandlers.addItem}/>)
        toolsItems.push([
            <Save 
            key="save" 
            variant={colorVariantPrimary} 
            clickHandler={props.clickHandlers.save}/>,

            <CancelAllChanges variant={colorVariantPrimary} 
            key="cancelChanges" 
            clickHandler={props.clickHandlers.cancelAllChanges} />])
    }

    return (
        <Navbar
        expand="md"
        bg="primary"
        sticky="top" 
        className="Tools align-items-top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
            {toolsItems}
        </Navbar.Collapse>
        </Navbar>
    )
}