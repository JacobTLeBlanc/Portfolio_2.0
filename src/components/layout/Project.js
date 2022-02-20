import React from "react";
import {Divider, Link, ListSubheader, Paper, Typography} from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";

/**
 * Shows a single project in Showcase
 *
 * @prop name         name of project
 * @prop language     language of code
 * @prop code         string of code
 * @prop link         link to source code
 * @prop description  description of project
 * @prop technologies technologies used in project
 */
const Project = (props) => {

    return (
        <Paper className="paper" style={{width: '100%', margin: 0, display: "flex", flexDirection: "column"}}>
            <ListSubheader>
                {props.name}
            </ListSubheader>
            <Divider />
            <div style={{padding: '0 10px 10px 10px'}}>
                <SyntaxHighlighter language={props.language}>
                    {"...\n\n" + props.code + "\n\n..."}
                </SyntaxHighlighter>
                <Link href={props.link}>{"Source Code"}</Link>
            </div>
            <Divider />
            <div style={{padding: '10px'}}>
                <Typography variant="subtitle">{"Brief Description: " + props.description} </Typography>
            </div>
            <Divider />
            <div style={{padding: '10px'}}>
                <Typography variant="subtitle">{"Technologies Used: " + props.technologies}</Typography>
            </div>
        </Paper>
    );
}

export default Project;