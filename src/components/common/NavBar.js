import React from 'react'
import Button from "./Button";
import '../../styles/common/NavBar.css'

/**
 * Navigation Bar
 */
const NavBar = () => {
    return (
        <div className="navBar">
            <h1 className="header">Jacob LeBlanc's Portfolio</h1>

            <div className="buttonList">
                <Button text = "Home" link = "/" />
                <Button text = "About Me" link = "/about" />
                <Button text = "Projects" link = "/projects" />
            </div>
        </div>
    )
}

export default NavBar