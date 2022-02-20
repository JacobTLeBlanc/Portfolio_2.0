import React from "react";
import '../styles/App.css'
import Main from "./Main";
import Header from "./layout/Header";
import background from "../../static/images/repeating_background.jpg";

/**
 * App Component
 *
 * Component that is initially rendered in index.js
 */
const App = () => {

    return (
        <div style={{backgroundImage: `url(${background})`, backgroundRepeat: 'repeat', padding: '5px', minHeight: '100vh'}}>
            <header>
                <Header text="Jacob LeBlanc's Portfolio" variant="h6" />
            </header>

            <main>
                <Main />
            </main>

            <div className="footer_div">
                <footer className="footer">
                    Copyright 2022 - Jacob LeBlanc. All Rights Reserved.
                </footer>
            </div>
        </div>
    )
};

export default App;