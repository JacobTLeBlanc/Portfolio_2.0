import React from "react";
import '../styles/App.css'
import Main from "./Main";
import Header from "./layout/Header";

/**
 * App Component
 *
 * Component that is initially rendered in index.js
 */
const App = () => {

    return (
        <div>
            <header>
                <Header />
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