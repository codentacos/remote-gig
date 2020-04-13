import React, { Component } from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
import logo from './../assets/images/REWORK.png';

export default class Header extends Component {
    render() {
        console.log(logo);
        
        return (
            <Jumbotron className='header'>
                <div className='header-text text-center'>
                    {/* <h1>Re/Work</h1> */}
                    {/* <div className='logo'></div> */}
                    <img className='logo' src={logo} />
                </div>
            </Jumbotron>
        );
    }
}