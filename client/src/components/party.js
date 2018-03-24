import React, { Component } from 'react';
import './party.css';
// import Events from './events'


class Party extends Component {
   
    render() {
        return (
            <div>
                <h1> Party component </h1>
                Value in Party Props: { this.props.passedVal } 
            </div>
            
        )
    }
}

export default Party;