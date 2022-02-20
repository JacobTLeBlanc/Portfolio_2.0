import React from 'react'
import RepositoryList from "../repository/RepositoryList";

import "../../styles/layout/Header.css";
import "../../styles/layout/Projects.css"
import Header from "./Header";
import Showcase from "./Showcase";

/**
 * Projects component
 */
const Projects = () => {
    return (
        <div>
            <Header text = "Projects" variant = "h6" />
            <Showcase />
            <RepositoryList />
        </div>

    )
}
export default Projects