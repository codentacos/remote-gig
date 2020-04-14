import React, { Component } from 'react';
import { Form, FormControl, FormGroup, FormLabel, Button } from 'react-bootstrap';
import axios from 'axios';
// import the component
import MailchimpSubscribe from 'react-mailchimp-subscribe';

// const simpleForm = () => {<MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />

const TestForm = () => {
    return (
        <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL}
        render={() => {
            <Form className='subscribe-form'>
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
                    <FormControl type='text' name='company' value={this.state.company} onChange={this.handleChange} placeholder='Company Name' />
                </FormGroup>
                <Button type='submit' variant='outline-danger m-auto d-block'>Subscribe</Button>
            </Form>
        }}
                
             />
        );
}

export default TestForm;