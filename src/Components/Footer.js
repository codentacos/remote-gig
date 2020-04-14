import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return(
        <Container fluid className='footer text-center mt-4'>
            <div><a href='#'>Contact Us</a></div>
            <span>Built with &#10084; in Austin Texas</span>
        </Container>
    );
}

export default Footer;