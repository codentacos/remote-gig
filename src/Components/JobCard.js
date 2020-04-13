import React, { Component } from 'react';
import { Row, Card, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import faker from 'faker';

export default class JobCard extends Component {
    renderJobs(job) {
        return (
            <Row key={job.key} id={job.key} className="job-card-row mb-2 mr-1 ml-1 justify-content-center">
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>{job.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
                        <Card.Text className='card-job-desc'>
                            {job.desc}
                        </Card.Text>
                        <Link to={`/job${job.key}`}><Button>View Job</Button></Link>
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


