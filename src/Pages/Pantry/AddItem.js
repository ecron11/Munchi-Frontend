import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react'
import { Button, Accordion, Card, Form } from 'react-bootstrap';

export default class AddItem extends Component {
    constructor(props) {
        super(props)
        
        this.changeHandler = this.changeHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);

        this.state = {
            itemName: "",
            itemQty: "",
            itemQtyUnit: ""
        }
    }

    //sets form input based names
    changeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //Handler for the click event calls handler sent down in props. 
    clickHandler() {
        this.props.clickHandler(this.state.itemName, Number(this.state.itemQty), this.state.itemQtyUnit)
        this.setState({
            itemName: "",
            itemQty: "",
            itemQtyUnit: ""
        })
    }

    render() {

        return (
            <Accordion className="add-item-tool mx-1">
                <Card style={{ width: '16rem'}} align="center" bg={this.props.bgVariant} text="white">
                    <Accordion.Toggle style={{ height: '3rem' }} as={Card.Header} eventKey="1">
                        Create New Item <FontAwesomeIcon icon={faChevronCircleDown} />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Form  onSubmit={this.clickHandler}>
                                <Form.Label className="mt-2" htmlFor="itemName">Item Name</Form.Label>
                                <Form.Control onChange={this.changeHandler} name="itemName" value={this.state.itemName}/>
                                <Form.Label className="mt-2" htmlFor="itemQty">Quantity</Form.Label>
                                <Form.Control type="number" onChange={this.changeHandler} name="itemQty" value={this.state.itemQty}/>
                                <Form.Label className="mt-2" htmlFor="itemQtyUnit">Unit</Form.Label>
                                <Form.Control onChange={this.changeHandler} name="itemQtyUnit" value={this.state.itemQtyUnit} placeholder="Pounds, bunches, etc.." />
                                <Button className="my-2" block variant={this.props.btnVariant} onClick={this.clickHandler}>Add New Item</Button>
                            </Form>
                        </Card.Body> 
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}
