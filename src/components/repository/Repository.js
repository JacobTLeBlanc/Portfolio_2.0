import React from "react";
import {Button, IconButton, TableCell, TableRow} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../../styles/repository/RepositoryList.css'

/**
 * Repository Component, represent repository data as a table row
 *
 * @prop name        name of repository
 * @prop description description of repository
 * @prop url         url to repo source code
 */
const Repository = (props) => {

    /**
     * Handles click on github icon
     *
     * Opens new window to linked github repo
     */
    function onGitHubClick() {
        window.open(props.url, "_blank");
    }

    return (
        <TableRow key={props.name}>
            <TableCell className="table-cell-name">{props.name}</TableCell>
            <TableCell align="right" ><IconButton onClick={onGitHubClick} ><GitHubIcon /></IconButton></TableCell>
        </TableRow>
    )
}

export default Repository