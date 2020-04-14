import React, { Component } from 'react';
import { Row, Card, Container, Button, ListGroup } from 'react-bootstrap';

export default class JobCard extends Component {
    renderJobs(job) {
        return (
            <Row key={job.key.toString()} id={job.key} className="job-card-row mb-2 mr-1 ml-1 justify-content-center" >
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>{job.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>

                        {(() => {
                            if (this.props.seeMore === true && this.props.userInput === job.key.toString()) {
                                return (
                                    <div>
                                        <Card.Text>
                                            {job.longDesc}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Requirements</strong>
                                        </Card.Text>
                                        <ListGroup>
                                            {job.skills.map((el, index) => <ListGroup.Item className='listgroup-item' key={index}>- {el}</ListGroup.Item>)}
                                        </ListGroup>
                                        <Card.Text>
                                            {job.longDesc}
                                        </Card.Text>
                                        <Button type='button' variant='outline-dark mr-2' style={{ width: '115px' }}>Apply</Button>
                                        <Button variant='outline-danger' style={{ width: '115px' }} onClick={this.props.handleState}>See Less</Button>

                                    </div>)
                            } else {
                                return (
                                    <Card.Text>
                                        <span className='d-block'>{job.desc}</span>
                                        <Button variant='outline-dark mt-1' onClick={this.props.handleState}>See More</Button>
                                    </Card.Text>)

                            }
                        })()}
                    </Card.Body>
                </Card >
            </Row >);
    }

    render() {
        return (
            <Container className="justify-content-center">
                {this.props.jobs.map(job => this.renderJobs(job))}
            </Container>
        );
    }
}


