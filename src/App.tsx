import React from 'react';
import logo from '../logo.svg';
import './css/App.css';
import './css/bootstrap.min.css'

import {BrowserRouter, Route, Switch} from "react-router-dom";
import {HomeConstructor} from "./HomeConstructor";

function App() {
    return (

        <div className="container">
            <HomeConstructor/>
        </div>


    );
}

export default App;
