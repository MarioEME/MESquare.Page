import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import NavBar from  './navbar'
import Content from './content'


class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Content />
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;