import {
    Collapse,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListSubheader,
    Paper,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import "../../styles/common.css"
import {ExpandLess, ExpandMore} from "@mui/icons-material";

/**
 * Skills component
 *
 * Shows a list of skills that can be expanded for more detail
 */
const Skills = () => {

    const [languagesOpen, setLanguagesOpen] = useState(false);
    const [toolsOpen, setToolsOpen] = useState(false);
    const [awsOpen, setAWSOpen] = useState(false);
    const [otherOpen, setOtherOpen] = useState(false);

    const handleLanguagesClick = () => {
        setLanguagesOpen(!languagesOpen);
    }

    const handleToolsClick = () => {
        setToolsOpen(!toolsOpen);
    }

    const handleAWSClick = () => {
        setAWSOpen(!awsOpen);
    }

    const handleOtherClick = () => {
        setOtherOpen(!otherOpen);
    }

    return (
        <div>
            <Paper className="paper" >
                <List disablePadding subheader={
                    <ListSubheader>
                        Skills
                    </ListSubheader>
                }>
                    {/* Languages */}
                    <Divider />
                    <ListItemButton onClick={handleLanguagesClick}>
                        <ListItemText primary="Languages" />
                        {languagesOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={languagesOpen}>
                        <Typography padding="15px">
                            Java, C#, Python, JavaScript, and SQL.
                        </Typography>
                    </Collapse>

                    {/* Tools */}
                    <Divider />
                    <ListItemButton onClick={handleToolsClick}>
                        <ListItemText primary="Tools & Frameworks" />
                        {toolsOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={toolsOpen}>
                        <Typography padding="15px">
                            React.js, Docker, Spring Boot, NoSQL, Concourse, BitBucket/Git, Swagger(OpenAPI) and Terraform.
                        </Typography>
                    </Collapse>

                    {/* AWS */}
                    <Divider />
                    <ListItemButton onClick={handleAWSClick}>
                        <ListItemText primary="AWS Technologies" />
                        {awsOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={awsOpen}>
                        <Typography padding="15px">
                            S3, DynamoDB, Lambda, Elastic Beanstalk, EC2, ECS, ECR, CloudWatch, API Gateway, Secrets Manager, IAM, CodePipeline and Amplify.
                        </Typography>
                    </Collapse>

                    {/* Other */}
                    <Divider />
                    <ListItemButton onClick={handleOtherClick}>
                        <ListItemText primary="Other" />
                        {otherOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={otherOpen}>
                        <Typography padding="15px">
                            Cloud, Microservice and Serverless development.
                        </Typography>
                    </Collapse>
                </List>
            </Paper>
        </div>
    )
}

export default Skills