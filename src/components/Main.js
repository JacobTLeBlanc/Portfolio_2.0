import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './layout/Home';

/**
 * Main Component
 *
 * Determines which page to show depending on the current URL
 */
const Main = () => {
    return (
        <Routes>
            <Route path='/' element={ <Home /> } />
        </Routes>
    );
}

export default Main;