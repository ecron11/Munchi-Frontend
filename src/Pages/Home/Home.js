import React from 'react'
import { Button, Card, CardDeck, Col, Container, Jumbotron, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <Container>
            <Jumbotron className="my-3">
                <h1 className="display-3">Welcome to Munchi!</h1>
                <p className="lead">A kitchen management project created by <a target="_blank" rel="noopener noreferrer" href="https://www.erik-longuepee.com/">Erik Longuepee</a></p>
                <hr />
                <p>To get started <Link to="/Login">login.</Link></p>
            </Jumbotron>

            <h2 align="center" className="my-4">About Munchi</h2>
            <hr className="mx-5"/>
            <p>Munchi is a project created by me, <a target="_blank" rel="noopener noreferrer" href="https://www.erik-longuepee.com/">Erik Longuepee</a> designed to 
                help automate and track your kitchen. Munchi's goal is to eliminate food waste, simplify then kitchen, and to get people to the meal faster. There are 3 key components of
                Munchi, that make organizing and managing a kitchen simple:
            </p>
            
            <CardDeck className="m-3" >
                <Card className="p-3">
                    <Card.Img className="p-5" variant="top" src="./Food.png" />
                    <Card.Title className="mt-2" align="center">Pantry</Card.Title>
                    <hr />
                    <Card.Body>Munchi Pantry allows you to keep track of everything in your kitchen</Card.Body>
                    <Button>Try it!</Button>
                </Card>
                <Card  className="p-3">
                    <Card.Img className="p-5" variant="top" src="./Recipe.png" />
                    <Card.Title className="mt-2" align="center">Recipes</Card.Title>
                    <hr />
                    <Card.Body>Munchi Recipes let you create and store recipes that will automatically draw from your pantry</Card.Body>
                    <Button variant="danger">Under construction!</Button>
                </Card>
                <Card className="p-3">
                    <Card.Img className="p-5" variant="top" src="./List.png" />
                    <Card.Title className="mt-2" align="center">Shopping Lists</Card.Title>
                    <hr />
                    <Card.Body>Munchi Lists let you automatically create shopping lists based on recipes and presets</Card.Body>
                    <Button variant="danger">Under construction!</Button>
                </Card>
            </CardDeck>

            <h4 align="center" className="my-4">How it's made:</h4>
            <p>Munchi is made with the MERN Stack (MongoDb, Express, React, and Node) and hosted on AWS. It was made entirely by one person (expect for the wonderful logo that was created by the equally wonderful Clarissa Gomez.</p>
        </Container>
    )
}
