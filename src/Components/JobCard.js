import React, { Component } from 'react';
import { Row, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import faker from 'faker';

export default class JobCard extends Component {
    renderJobs(job) {
        return (
            <Row className="mb-2 justify-content-center">
                <Card style={{ width: '80%' }}>
                    <Card.Body>
                        <Card.Title>{job.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
                        <Card.Text>
                            {job.desc}
                        </Card.Text>
                        <Card.Link href="#"><Link to='/jobid'>View Job</Link></Card.Link>
                    </Card.Body>
                </Card>
            </Row>
        )
    }
    render() {
        return (
            <Container className="justify-content-center">
                {this.props.jobs.map(job => this.renderJobs(job))}
            </Container>
        );
    }
}


