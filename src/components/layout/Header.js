import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";

/**
 * Header component
 *
 */
const Header = () => {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" className="header">
                    Jacob LeBlanc's Portfolio
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;