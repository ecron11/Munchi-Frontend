import React, { Component } from 'react'
import Recipes from './Recipes'
import Tools from './Tools'

export default class Cookbook extends Component {
    constructor(props) {
        super(props)
    
        this.loadCookbook = this.loadCookbook.bind(this);
        this.createCookbook = this.createCookbook.bind(this);

        this.state = {
             currentCookbookId: "",
             currentCookbookName: ""
        }
    }
    
    loadCookbook(cookbook) {
        console.log(cookbook);
        this.setState({
            currentCookbookName: cookbook.name
        })
    }

    createCookbook(newCookbookname) {
        console.log(newCookbookname);
        this.setState({
            currentCookbookName: newCookbookname
        })
    }

    render() {
        let toolHandlers = {
            loadCookbook: this.loadCookbook,
            createCookbook: this.createCookbook

        }
        return (
            <div>
                <Tools clickHandlers={toolHandlers}/>
                <Recipes currentCookbookName={this.state.currentCookbookName}/>
            </div>
        )
    }
}
