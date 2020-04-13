import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class FullListing extends Component {
    render() {
        return(
            <Container>
            if (this.props.jobs.key === )
                <h1>{ this.props.jobs[0].title }</h1>
                <h2>{ this.props.jobs[0].company }</h2>
                <p>{this.props.jobs[0].longDesc}</p>
                <ul>
                    { this.props.jobs[0].skills.map(el => <li>{el}</li>) }
                </ul>
                <p>{this.props.jobs[0].longDesc}</p>
                <Button type='button' variant='outline-dark' style={{ width: '115px' }}>Apply</Button>
                <Link to='/home'><Button type='button' variant='outline-danger ml-2'>Back</Button></Link>
            </Container>
        );
    }
}