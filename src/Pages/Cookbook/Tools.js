import React from 'react'
import { Navbar } from 'react-bootstrap'
import LoadCookbook from './LoadCookbook';

export default function Tools(props) {
    let colorVariantPrimary = "warning";
    let colorVariantSecondary = "info"
    let testCookbooks = [ //test values
        { 
            _id : "123123", 
            name: "test 1"},
        {
            _id : "456542",
            name: "test 2"
        }];

    let toolsItems = [
        <LoadCookbook 
            bgVariant={colorVariantPrimary} 
            btnVariant={colorVariantSecondary}
            key="getCookbook"
            loadClickHandler={props.clickHandlers.loadCookbook} 
            createClickHandler={props.clickHandlers.createCookbook} 
            cookbooks={testCookbooks} 
            />
    ]
    
    // if(props.cookbookLoaded) {
    //     toolsItems.unshift(
    //         <AddRecipe 
    //         bgVariant={colorVariantPrimary} 
    //         btnVariant={colorVariantSecondary} 
    //         key="addRecipe" 
    //         clickHandler={props.clickHandlers.addItem}/>)
    // }


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
