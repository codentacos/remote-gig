import React, { Component } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Components
import Header from './Components/Header';
import JobCard from './Components/JobCard';
import FullListing from './Components/FullListing';
import CreateJobPost from './Components/CreateJobPost';
import TestForm from './Components/TestForm';
import Footer from './Components/Footer';
import RimpForm from './Components/RimpForm';

// Seed Data
import { seedData } from './seed';

export default class App extends Component {
  state = {
    jobs: [],
    url: ''
  }

  componentWillMount() {
    const seed = seedData();
    console.log(seed);
    this.setState((prevState) => ({
      jobs: seed,
      prevState
    }));

  }

  // handleUrl = (e) => {
  //   this.setState((prevState) => {
  //     prevState,
  //     url: ''
  //   })
  // }

  render() {
    return (
      <BrowserRouter>

        <Container fluid className='px-0'>
          <Header />
          <Container className='main-content'>
            {/* <Switch> */}

               <Route exact path='/home'>
                <Row>
                  <p className='text-center home-intro'>Welcome to Rework. We are an online job board specialized in helping you find your next remote work opportunity.</p>
                  <p className='text-center'>We are not currently posting jobs but we are putting together a mailing list of clients who will be notified when we launch and recieve a special offer!</p>
                  {/* <Button variant='dark m-auto'>Post A Job</Button> */}
                </Row>
                <Row>
                <RimpForm />
                </Row>
                </Route> 
                {/* REMOVE ABOVE  CLOSING TAG*/}
              {/*<Row>
                  <h2 className='jobs-heading'>Jobs</h2>
                </Row>
                <JobCard
                  jobs={this.state.jobs}
                />

              </Route>
              <Route path={`/job${this.state.jobs.key}`}>
                <FullListing
                  jobs={this.state.jobs}
                />

              </Route>
              <Route path='/create'>
                <CreateJobPost />
              </Route> */}

              <Redirect exact from='/' to='/home' />
            {/* </Switch> */}
            
          </Container>
          <Footer />
        </Container>
      </BrowserRouter >
    );
  }

}
