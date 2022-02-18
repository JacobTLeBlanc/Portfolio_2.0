import {Collapse, Divider, List, ListItemButton, ListItemText, ListSubheader, Paper, Typography} from "@mui/material";
import React, {useState} from "react";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

/**
 * Experience component
 *
 * Shows list of work experience
 */
const Experience = () => {

    const [resmed2021Open, setResmed2021Open] = useState(false);
    const [resmed2020Open, setResmed2020Open] = useState(false);

    const handleResmed2021Click = () => {
        setResmed2021Open(!resmed2021Open);
    }

    const handleResmed2020Click = () => {
        setResmed2020Open(!resmed2020Open);
    }

    return (
        <Paper className="paper">
            <List disablePadding subheader={
                <ListSubheader>
                    Experience
                </ListSubheader>
            }>
                {/* ResMed 2021 */}
                <Divider />
                <ListItemButton onClick={handleResmed2021Click}>
                    <ListItemText primary="Associate Software Developer (Intern) | Resmed | Jan - Dec 2021" />
                    {resmed2021Open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={resmed2021Open}>
                    <Typography padding="15px">
                        <ul>
                            <li>
                                Migrated existing applications from on-premise infrastructure to AWS infrastructure.
                                This included a legacy .NET framework application (C#.NET and ASP.NET) from its original data center IIS hosting to AWS Elastic Beanstalk.
                                This also included a .NET Core microservice into AWS ECS.
                            </li>
                            <li>
                                Created a CICD pipeline using Concourse to build and containerize a .NET Core microservice. The resulting container image is deployed into AWS ECR.
                            </li>
                            <li>
                                Implemented Terraform modules to manage AWS infrastructure (Infrastructure As Code).
                            </li>
                            <li>
                                Created a REST API fronted by AWS API Gateway and backed by AWS Lambdas. This API services a React.js application hosted statically from AWS S3.
                            </li>
                            <li>
                                Improved the security for existing applications by fixing vulnerabilities identified by InfoSec (e.g. This included creating a Lambda to rotate cryptographic keys within AWS).
                            </li>
                            <li>
                                Created and maintained Dockerfiles to containerize legacy and current applications.
                            </li>
                            <li>
                                Improved the UX of an internal React.js application using responsive web design patterns.
                            </li>
                            <li>
                                Added integration and unit tests to multiple projects. These tests were implemented using JUnit.
                            </li>
                            <li>
                                Worked within 2 separate software development teams during this work term and experienced the different software development processes and the technology employed by each team.
                            </li>
                        </ul>
                    </Typography>
                </Collapse>

                {/* ResMed 2020 */}
                <Divider />
                <ListItemButton onClick={handleResmed2020Click}>
                    <ListItemText primary="Associate Software Developer (Intern) | Resmed | May - Aug 2020" />
                    {resmed2020Open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={resmed2020Open}>
                    <Typography padding="15px">
                        <ul>
                            <li>
                                Developed a Spring Boot microservice application to manage phone call audio recordings produced by Aspect telephony software.
                                The microservice replaced an existing CRON process that took 30 minutes to complete. The new microservice instance performed the same work in seconds.
                            </li>
                            <li>
                                Implemented multiple REST endpoints on existing applications.
                            </li>
                            <li>
                                Employed a MongoDB instance via Docker for local testing and experimentation.
                            </li>
                        </ul>
                    </Typography>
                </Collapse>
            </List>
        </Paper>
    )
}

export default Experience;