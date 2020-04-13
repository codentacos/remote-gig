import React, { Component } from 'react';
import { Form, FormControl, FormGroup, FormLabel, Button } from 'react-bootstrap';
import axios from 'axios';
// import the component
// import Mailchimp from 'react-mailchimp-form'

class TestForm extends Component {
    state = {
        email: '',
        fname: '',
        lname: '',
        company: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(e.target.value);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { fname, lname, email, company } = this.state;

        axios.post('https://gmail.us19.list-manage.com/subscribe/post?u=873c1782a49f8d3e5a649e23a&amp;id=51fc529884', { fname, lname, email, company })
            .then((result) => {
                console.log('data submitted');
            })
            .catch((error) => {
                console.log('There was an error: ', error);
            });
    }
    
    render() {
        return (
            <Form className='subscribe-form' onSubmit={this.handleSubmit}>
                <h3 className='text-center'>Subscribe for updates and a 25% discount code!</h3>
                <FormGroup controlId='Email'>
                    <FormLabel>E-mail Address:</FormLabel>
                    <FormControl type='email' name='email' value={this.state.email} onChange={this.handleChange} placeholder='E-mail address' required />
                </FormGroup>

                <FormGroup controlId='FirstName'>
                    <FormLabel>First Name:</FormLabel>
                    <FormControl type='text' name='fname' value={this.state.fname} onChange={this.handleChange} placeholder='First Name' required />
                </FormGroup>

                <FormGroup controlId='LastName'>
                    <FormLabel>Last Name:</FormLabel>
                    <FormControl type='text' name='lname' value={this.state.lname} onChange={this.handleChange} placeholder='Last Name' required />
                </FormGroup>

                <FormGroup controlId='Company'>
                    <FormLabel>Company:</FormLabel>
                    <FormControl type='text'  name='company' value={this.state.company} onChange={this.handleChange} placeholder='Company Name' />
                </FormGroup>
                <Button type='submit' variant='outline-danger m-auto d-block'>Subscribe</Button>
            </Form>
        );
    }
}

export default TestForm;