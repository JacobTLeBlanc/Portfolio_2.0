import React from 'react'
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";

/**
 * Home/Main page
 */
const Home = () => {

    return (
        <div>
            <About />
            <Skills />
            <Projects />
        </div>

    )
}
export default Home