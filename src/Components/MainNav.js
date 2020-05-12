import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavLink } from 'react-bootstrap';

export default class MainNav extends Component {
    render() {
        return (
            <Navbar fixed='top' expand='lg' className='mainNav'>
                <NavbarBrand href='#'>Rework</NavbarBrand>
                <Nav className='ml-auto mr-4'>
                    <NavLink href='home'>Home</NavLink>
                </Nav>
            </Navbar>
        );
    }
}