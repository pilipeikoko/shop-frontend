import React from 'react';
import logo from '../logo.svg';
import './css//App.css'
import './css/bootstrap.min.css'
import './css/layout.css'
import './css/site.css'


import {Navbar, Nav} from 'react-bootstrap'
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import {HomeConstructor} from "./HomeConstructor";
import {CategoriesConstructor} from "./CategoriesConstructor";

function Header() {
    return (

        <BrowserRouter>
            <header>
                <Navbar bg="dark" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>

                            <nav className="container d-flex flex-column flex-md-row">
                                <a className="mr-auto p-2" href="/" aria-label="Home">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         stroke="currentColor"
                                         stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                         className="d-block mx-auto"
                                         role="img" viewBox="0 0 24 24"><title>Home</title>
                                        <circle cx="12" cy="12" r="10"/>
                                        <path
                                            d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/>
                                    </svg>
                                </a>
                                <NavLink className="p-2 flex-item" to="/phones">
                                    Categories
                                </NavLink>
                            </nav>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </header>
            <Switch>
                <Route path='/' component={HomeConstructor} exact/>
                <Route path='/categories' component={CategoriesConstructor}/>
            </Switch>
        </BrowserRouter>

    );
}

export default Header;
