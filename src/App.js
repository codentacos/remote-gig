import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Header from './Components/Header';
import JobCard from './Components/JobCard';
import FullListing from './Components/FullListing';

// Seed Data
import { seedData } from './seed';

export default class App extends Component {
  state = {
    jobs: []
  }

  componentWillMount() {
    const seed = seedData();
    console.log(seed);
    this.setState(() => ({
      jobs: seed
    }));

  }

  render() {
    return (
      <BrowserRouter>
        <Container fluid className='px-0'>
          <Header />
          <Container>
            <Switch>
              <Route exact path='/'>
                <JobCard
                  jobs={this.state.jobs}
                />
              </Route>
              <Route path='/jobid'>
                <FullListing
                  jobs={this.state.jobs}
                />
              </Route>
            </Switch>
          </Container>
        </Container>
      </BrowserRouter >
    );
  }

}
