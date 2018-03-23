import React, { Component } from 'react';
import logo from './token.png';
import './nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="topnav" id="myTopnav">
                <a className="token-name" href="/"><img src = {logo} alt = "logo"/>Token</a>
                <a href="/" className="active">Home</a>
                <a href="/">Events</a>
                <a href="/">About</a>
            </div>
            
        )
    }
}

export default Nav;