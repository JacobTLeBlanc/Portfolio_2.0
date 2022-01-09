import React from 'react'
import Button from "./Button";
import '../../styles/common/NavBar.css'

/**
 * Navigation Bar
 */
const NavBar = () => {
    return (
        <div className="navBar">
            <Button text = "Home" />
            <Button text = "About Me" />
            <Button text = "Projects" />
        </div>
    )
}

export default NavBar