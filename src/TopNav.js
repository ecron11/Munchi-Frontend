import React from 'react'
import { Link } from 'react-router-dom'
import './TopNav.css'

export default function TopNav(props) {
    return (
        <nav className="TopNav">
            <ul>
                <li>
                    <Link to='/'>
                        <img id="logoImg" src="./logo-dark.png" alt="logo"/>
                    </Link>
                </li>
                <li>
                    <Link to="/Pantry">
                        Pantry
                    </Link>
                </li>
                <li>
                    <Link to="/Login">
                        Login
                    </Link>
                </li>

            </ul>
            <p>{`Welcome ${props.name}!`}</p>
        </nav>
    )
}
