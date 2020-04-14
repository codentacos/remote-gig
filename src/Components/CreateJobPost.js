import React, { Component } from 'react';
import { Row, Form, FormControl, FormLabel, FormGroup } from 'react-bootstrap';
// import '../Styles/app.scss';

// Styles

export default class CreateJobPost extends Component {
    render() {
        return (
            // <Container className='create-job-form'>
                <Form className='create-job-form'>
                    <Row>
                        <FormGroup>
                            <FormLabel>Job Title</FormLabel>
                            <FormControl type='text' placeholder='Job Title' />
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl type='text' placeholder='Job Title' />
                        </FormGroup>
                    </Row>



                </Form>
            // </Container>
        );
    }
}