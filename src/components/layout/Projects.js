import React from 'react'
import RepositoryList from "../repository/RepositoryList";

import "../../styles/layout/Header.css";
import "../../styles/layout/Projects.css"
import Header from "./Header";

/**
 * Projects component
 */
const Projects = () => {
    return (
        <div>
            <Header text = "Projects" variant = "h6" />
            <RepositoryList />
        </div>

    )
}
export default Projects