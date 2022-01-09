import React from "react";
import Home from "./pages/Home";
import NavBar from "./common/NavBar";
import '../styles/App.css'
import Main from "./Main";

const App = (props) => {

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