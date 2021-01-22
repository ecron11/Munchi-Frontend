import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { Accordion, Button, Card, Form } from 'react-bootstrap'

export default class LoadCookbook extends Component {
    constructor(props) {
        super(props);

        this.changeHandler = this.changeHandler.bind(this);
        this.loadClickHandler = this.loadClickHandler.bind(this);
        this.createClickHandler = this.createClickHandler.bind(this);

        this.state = {
            cookbookId: "",
            newCookbookName: ""
        }
    }

    changeHandler(event) { 
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    loadClickHandler() {
        console.log(this.state.cookbookId);
        let selectedCookbook = this.props.cookbooks.find((element) => {
            return element._id === this.state.cookbookId;
        })
        console.log(selectedCookbook);
        this.props.loadClickHandler(selectedCookbook);
    }

    createClickHandler() {
        this.props.createClickHandler(this.state.newCookbookName);
    }

    //sets a default value if an cookbookId isn't selected
    componentDidUpdate() {
        //checks if there is no Id set
        if (this.state.cookbookId === "")
        {
            //checks if there is an cookbook to set to.
            if (this.props.cookbooks.length > 0) {
                //sets the id if there is an ID to set to
                let cookbookId = "";
                cookbookId = this.props.cookbooks[0]._id;
                this.setState({
                    cookbookId: cookbookId
                })
            }
            
        }
    }

    componentDidMount() {
        if (this.state.cookbookId === "")
        {
            //checks if there is an cookbook to set to.
            if (this.props.cookbooks.length > 0) {
                //sets the id if there is an ID to set to
                let cookbookId = "";
                cookbookId = this.props.cookbooks[0]._id;
                this.setState({
                    cookbookId: cookbookId
                })
            }
            
        }
    }

    render() {
        let cookbookOptions = []
        if (this.props.cookbooks){
            //create the cookbook options
            cookbookOptions = this.props.cookbooks.map(element => (
                <option key={element._id} value={element._id}>
                    {element.name}
                </option>
            ));
        }

        return (
            <Accordion className="load-cookbook-tool mx-1">
                <Card style={{ width: '17rem'}} bg={this.props.bgVariant} padding="1" text="white">
                    <Accordion.Toggle style={{ height: '3rem' }} as={Card.Header} align="center" eventKey="0">
                        Load or Create Cookbook <FontAwesomeIcon icon={faChevronCircleDown} />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Form.Control as="select" onChange={this.changeHandler} name="cookbookId" value={this.state.cookbookId}>
                                {cookbookOptions}
                            </Form.Control>
                            <Button block className="my-2" variant={this.props.btnVariant} onClick={this.loadClickHandler}>Load Cookbook</Button>

                            <Form.Control onChange={this.changeHandler} name="newCookbookName" value={this.state.newCookbookName}/>
                            <Button block className="my-2" variant={this.props.btnVariant} onClick={this.createClickHandler}>Create new Cookbook</Button>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}
