import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <Jumbotron className='header'>
                <div className='header-text text-center'>
                    <h1>Remote Gig's</h1>
                    <p>Find your next opportunity from home, for home.</p>
                </div>
            </Jumbotron>
        );
    }
}