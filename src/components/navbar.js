import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light border-bottom shadow-sm">
                <NavLink className="navbar-brand" to="/">
                    <h3>Mário Encarnação</h3>
                    <h6>A site under construction</h6>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav mr-auto">
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/">About Me</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/projects">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/resume">Resume</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;