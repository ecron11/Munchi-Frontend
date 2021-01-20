import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function TopNav(props) {
    //determines the navbar links available based on loggedin
    let navBarItems = 
    [<Navbar.Toggle key="navBarToggle" aria-controls="responsive-navbar-nav" />
        , 
        <Navbar.Brand key="logoLink">
            <Link to='/Home'>
                <img height="70" id="logoImg" src="./logo.png" alt="logo"/>
            </Link>
        </Navbar.Brand>
        ]
    //if logged in, add the logged in navigation,
    if(props.loggedIn) {
        navBarItems.push([
            <Navbar.Collapse key="loggedInNav">
                <Nav>
                    <Navbar.Text>
                        <Link to="/Pantry">
                            Pantry
                        </Link>
                    </Navbar.Text>
                    <Nav.Link href={`${props.apiUrl}/auth/logout`}>
                        Logout
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>,
            <Navbar.Collapse key="welcomeMessage" className="justify-content-end">
                <Navbar.Text>
                    {`Welcome ${props.user.firstName}!`} <FontAwesomeIcon size="lg" icon={faUserAstronaut} />
                </Navbar.Text>
            </Navbar.Collapse>]
            
        )
    } else { //if not logged in, add login only
        navBarItems.push(
            <Nav key="loggedOutNav">
                <Navbar.Text>
                    <Link to="/Login">
                        Login
                    </Link>
                </Navbar.Text>
            </Nav>
        )
    }
    return (
        <Navbar collapseOnSelect expand="md" bg="primary" variant="dark" className="TopNav" >
            {navBarItems}
        </Navbar>
    )
}
