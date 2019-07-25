import React, { Component } from 'react'
import {Route,Link,BrowserRouter as Router } from 'react-router-dom'
import CreateSrcComp from './CreateSrcComp'
import Home from './Addsong'
import "./Nav.scss"

export default class Routercomp extends Component {
    render() {
        return (
            <Router >
            <div>
                <ul className="navbar">
                    <li className="nav-links">
                    <Link to="/Addsong">Add a song</Link>
                    </li>
                    <li className="nav-link active">
                    <Link to="/../App">Create and Search</Link>
                    </li>
                </ul>
                <Route path="/Addsong" component={Home} />
                <Route path="/../App" component={CreateSrcComp} />
            </div>
            </Router>
        )
    }
}
