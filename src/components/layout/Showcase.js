import React from "react";
import {Grid} from "@mui/material";
import "../../styles/common.css"
import Project from "./Project";

import {
    emailServiceCodeString,
    emailServiceDescription, emailServiceLink,
    emailServiceTechnologies,
    gitRestApiCodeString,
    gitRestApiDescription, gitRestApiLink,
    gitRestApiTechnologies, portfolioCodeString, portfolioDescription, portfolioLink, portfolioTechnologies
} from "../../js/constants/ProjectStrings";

/**
 * Showcase of best projects
 *
 */
const Showcase = () => {
    return (
        <div style={{maxWidth: '1250px', margin: '0px auto'}} >
            <Grid container spacing={'5px'}>
                <Grid item xs={12}>
                    <Project
                        name = "Portfolio 2.0"
                        code = {portfolioCodeString}
                        description = {portfolioDescription}
                        technologies = {portfolioTechnologies}
                        language = "javascript"
                        link = {portfolioLink}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Project
                        name = "Git Rest API"
                        code = {gitRestApiCodeString}
                        description = {gitRestApiDescription}
                        technologies = {gitRestApiTechnologies}
                        language = "python"
                        link = {gitRestApiLink}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Project
                        name = "Email Service"
                        code = {emailServiceCodeString}
                        description = {emailServiceDescription}
                        technologies = {emailServiceTechnologies}
                        language = "java"
                        link = {emailServiceLink}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default Showcase;