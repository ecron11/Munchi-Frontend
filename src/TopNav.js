import React from 'react'
import './TopNav.css'

export default function TopNav() {
    return (
        <nav className="TopNav">
            <ul>
                <li><a href="#"><img id="logoImg" src="./logo-dark.png"/><span>Pantry</span></a></li>
            </ul>
        </nav>
    )
}
