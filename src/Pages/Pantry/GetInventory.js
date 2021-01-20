import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react'
import { Button, Accordion, Card, Form } from 'react-bootstrap';

export default class GetInventory extends Component {
    constructor(props) {
        super(props);

        this.changeHandler = this.changeHandler.bind(this);
        this.loadClickHandler = this.loadClickHandler.bind(this);
        this.createClickHandler = this.createClickHandler.bind(this);

        this.state = {
            inventoryId: "",
            newInventoryName: ""
        }
    }

    changeHandler(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    loadClickHandler() {
        let selectedInventory = this.props.inventories.find((element) => {
            return element._id === this.state.inventoryId;
        })
        this.props.loadClickHandler(selectedInventory);
    }

    createClickHandler() {
        this.props.createClickHandler(this.state.newInventoryName);
    }

    //sets a default value if an inventoryId isn't selected
    componentDidUpdate() {
        //checks if there is no Id set
        if (this.state.inventoryId === "")
        {
            //checks if there is an inventory to set to.
            if (this.props.inventories.length > 0) {
                //sets the id if there is an ID to set to
                let inventoryId = "";
                inventoryId = this.props.inventories[0]._id;
                this.setState({
                    inventoryId: inventoryId
                })
            }
            
        }
    }

    render() {

        let inventoryOptions = []
        if (this.props.inventories){
            //create the inventory options
            inventoryOptions = this.props.inventories.map(element => (
                <option key={element._id} value={element._id}>
                    {element.name}
                </option>
            ));
        }


        return (
            <Accordion className="load-inventory-tool mx-1">
                <Card style={{ width: '16rem'}} bg={this.props.bgVariant} padding="1" text="white">
                    <Accordion.Toggle style={{ height: '3rem' }} as={Card.Header} align="center" eventKey="0">
                        Load or Create Pantry <FontAwesomeIcon icon={faChevronCircleDown} />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Form.Control as="select" onChange={this.changeHandler} name="inventoryId" value={this.state.inventoryId}>
                                {inventoryOptions}
                            </Form.Control>
                            <Button block className="my-2" variant={this.props.btnVariant} onClick={this.loadClickHandler}>Load Pantry</Button>

                            <Form.Control onChange={this.changeHandler} name="newInventoryName" value={this.state.newInventoryName}/>
                            <Button block className="my-2" variant={this.props.btnVariant} onClick={this.createClickHandler}>Create new Pantry</Button>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}
