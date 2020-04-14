import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import logo from './../assets/images/REWORK.png';

export default class Header extends Component {
    render() {
        return (
            <Jumbotron className='header'>
                <div className='header-text text-center'>
                    <img className='logo' src={logo} alt='Logo' />
                </div>
            </Jumbotron>
        );
    }
}