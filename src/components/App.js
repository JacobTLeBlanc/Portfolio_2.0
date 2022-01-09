import React from "react";
import Home from "./pages/Home";
import NavBar from "./common/NavBar";
import '../styles/App.css'
import Main from "./Main";

/**
 * App Component
 *
 * Component that is initially rendered in index.js
 */
const App = () => {

    return (
        <div>
            <header>
                <NavBar />
            </header>

            <main>
                <Main />
            </main>

            <footer className="footer">
                Copyright 2022 - Jacob LeBlanc. All Rights Reserved.
            </footer>
        </div>
    )
}

export default App