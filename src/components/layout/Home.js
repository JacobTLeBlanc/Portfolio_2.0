import React from 'react'
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Experience from "./Experience";

/**
 * Home/Main page
 */
const Home = () => {

    return (
        <div>
            <About />
            <Skills />
            <Experience />
            <Projects />
        </div>

    )
}
export default Home