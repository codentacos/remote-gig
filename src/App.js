import React, { Component } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Components
import MainNav from './Components/MainNav';
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
          <MainNav />
          <Container className='main-content'>
            <Switch>

              <Route exact path='/home'>
                <Row>
                  <img id='programmer-img' src='/programmer.svg' alt='programmer' />
                  <p className='text-center home-intro'>We are an online job board specialized in helping software developers and designers find their next remote work opportunity.</p>
                  <Button id='post-job-btn' variant='dark m-auto'>Post A Job</Button>
                </Row>

                <Container>
                  <h2 className='jobs-heading'>Jobs</h2>
                
                  <JobCard
                    jobs={this.state.jobs}
                    seeMore={this.state.seeMore}
                    userInput={this.state.userInput}
                    handleState={this.handleState}
                  />
                </Container>
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
