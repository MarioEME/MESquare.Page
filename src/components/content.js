import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import About from './about'
import Resume from './resume'
import Projects from './projects'

class Content extends Component {
    render() {
        return (
            <div id="content" className="mt-3 mx-auto col-xl-6 col-lg-8 col-md-8 col-sm-12">
                <Route exact path="/" component={About} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/projects" component={Projects} />
            </div>
        );
    }
}

export default Content;