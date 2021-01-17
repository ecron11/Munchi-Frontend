import React from 'react'
import { Link } from 'react-router-dom'
import './TopNav.css'

export default function TopNav(props) {

    //determines the navbar links available based on loggedin
    let navBarItems = 
    [<li key="logoLink">
        <Link to='/Home'>
            <img id="logoImg" src="./logo-dark.png" alt="logo"/>
        </Link>
    </li>]
    //if logged in, add the logged in navigation,
    if(props.loggedIn) {
        navBarItems.push(
        [<li key="pantryLink">
            <Link to="/Pantry">
                Pantry
            </Link>
        </li>, 
        <li key="logoutLink">
            <a href="http://localhost:3000/auth/logout">
                Logout
            </a>
        </li>,
        <li key="welcome message">
            <span>{`Welcome ${props.user.firstName}!`}</span>
        </li>])
    } else { //if not logged in, add login only
        navBarItems.push(
        <li key="loginLink">
            <Link to="/Login">
                Login
            </Link>
        </li>)
    }
    return (
        <nav className="TopNav">
            <ul>
                {navBarItems}
            </ul>
        </nav>
    )
}
