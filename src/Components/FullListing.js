import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class FullListing extends Component {
    render() {
        return(
            <Container>
                <h1>{ this.props.jobs[0].title }</h1>
                <h2>{ this.props.jobs[0].company }</h2>
                <p>{this.props.jobs[0].longDesc}</p>
                <ul>
                    { this.props.jobs[0].skills.map(el => <li>{el}</li>) }
                </ul>
                <p>{this.props.jobs[0].longDesc}</p>
            </Container>
        );
    }
}