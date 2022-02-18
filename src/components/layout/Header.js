import React from "react";
import {AppBar, Paper, Toolbar, Typography} from "@mui/material";
import "../../styles/layout/Header.css"

/**
 * Header component
 *
 */
const Header = (props) => {

    return (
        <Paper className="header" id="header">
            <Toolbar>
                <Typography variant={props.variant}>
                    {props.text}
                </Typography>
            </Toolbar>
        </Paper>
    )
}

export default Header;