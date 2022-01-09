import React from 'react'
import '/src/styles/common/Button.css'

/**
 * Common re-usable button
 *
 * @prop text text to use for button
 */
const Button = (props) => {
    return (
        <button className='navButton' type="button">{props.text}</button>
    )
}

export default Button