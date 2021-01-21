import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function Footer() {
    return (
        <Navbar bg="dark" variant="dark" className="mt-3 mt-auto d-flex flex-wrap">
            <Container>
                <Navbar.Brand href="https://www.erik-longuepee.com/" target="_blank" rel="noopener noreferrer" className="ml-2"><img height="50" src="./logo_small.png" alt="logo" /> A project by Erik Longuepee</Navbar.Brand>
                <Nav className="d-flex flex-wrap">
                    <Nav.Link href="https://github.com/ecron11" target="_blank" rel="noopener noreferrer">Github <FontAwesomeIcon icon={faGithub} /></Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/erik-longuepee/" target="_blank" rel="noopener noreferrer">LinkedIn <FontAwesomeIcon icon={faLinkedin} /></Nav.Link>
                    <Nav.Link href="https://twitter.com/ErikLonguepee" target="_blank" rel="noopener noreferrer">Twitter <FontAwesomeIcon icon={faTwitter} /></Nav.Link>
                </Nav>
            </Container>
            
        </Navbar>
    )
}
