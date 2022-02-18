import {Avatar, Paper, Typography} from "@mui/material";
import React from "react";

/**
 * About component.
 *
 * Shows an avatar (image) and brief introduction.
 */
const About = () => {
    return (
        <Paper className="paper">
            <div style={{padding: '10px', display: 'flex', flexDirection: 'row'}}>
                <Avatar
                    alt="Jacob LeBlanc"
                    src="../../images/self_image.jpg"
                    sx={{ width: '20vh', height: '20vh'}}
                />
                <Typography style={{marginLeft: '10px'}}>
                    Welcome to my portfolio! I'm an avid programmer and always looking to improve my skills. I'm currently
                    studying Computer Science at Dalhousie University, planning to graduate in 2023. Some of my other interests include
                    history, politics, economics and basketball.
                </Typography>
            </div>
        </Paper>
    )
}

export default About;