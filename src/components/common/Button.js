import React from 'react'
import '/src/styles/common/Button.css'
import {Link} from "react-router-dom";

/**
 * Common re-usable button
 *
 * @prop text text to use for button
 * @prop link path to link to
 */
const Button = (props) => {
    return (
        <button className='navButton' type="button"><Link to={props.link}>{props.text}</Link></button>
    )
}

export default Button