import React, { Component } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Components
import Header from './Components/Header';
import JobCard from './Components/JobCard';
// import CreateJobPost from './Components/CreateJobPost';
import Footer from './Components/Footer';

// Seed Data
import { seedData } from './seed';



export default class App extends Component {
  state = {
    jobs: [],
    seeMore: false,
    userInput: null
  }

  componentDidMount() {
    const seed = seedData();

    this.setState((prevState) => ({
      jobs: seed,
      prevState
    }));

  }

  handleState = (e) => {
    console.log(e.currentTarget.parentElement.parentElement.parentElement.parentElement.id);
    if (this.state.seeMore === false) {
      this.setState({
        seeMore: true,
        userInput: e.currentTarget.parentElement.parentElement.parentElement.parentElement.id
      })
    } else {
      this.setState({
        seeMore: false,
        userInput: null
      })
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Container fluid className='px-0'>
          <Header />
          <Container className='main-content'>
            <Switch>

              <Route exact path='/home'>
                <Row>
                  <p className='text-center home-intro'>Welcome to Rework. We are an online job board specialized in helping you find your next remote work opportunity.</p>
                  <Button variant='dark m-auto'>Post A Job</Button>
                </Row>

                <Row>
                  <h2 className='jobs-heading'>Jobs</h2>
                </Row>
                <JobCard
                  jobs={this.state.jobs}
                  seeMore={this.state.seeMore}
                  userInput={this.state.userInput}
                  handleState={this.handleState}
                />

              </Route>
              {/* <Route path='/create'>
                <CreateJobPost />
              </Route> */}

              <Redirect exact from='/' to='/home' />
            </Switch>

          </Container>
          <Footer />
        </Container>
      </BrowserRouter >
    );
  }

}
