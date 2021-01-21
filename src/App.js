import React, { Component } from 'react'
import TopNav from './TopNav';
import Home from './Pages/Home/Home';
import Pantry from './Pages/Pantry/Pantry';
import Login from './Pages/Login/Login';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Footer from './Footer';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      loggedIn: false,
      user: {},
      // apiUrl: 'http://localhost:3000'
      apiUrl: 'https://munchi-api.erik-longuepee.com'
    }
  }
  
  componentDidMount() {
    fetch(`${this.state.apiUrl}/auth/checkCurrentUser`,{
    credentials: 'include'})
    .then(response => response.json())
    .then(data => {
      let loggedIn = false;
      if ('user' in data)
      {
        loggedIn = true;
      }
      this.setState({
        user: data.user,
        loggedIn: loggedIn
      })
    })
  }

  render() {
    return (
      <Container fluid className="p-0 d-flex flex-column min-vh-100">
        <Router>
          <TopNav loggedIn={this.state.loggedIn} user={this.state.user} apiUrl={this.state.apiUrl}/>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/Home' />
            </Route>
            <Route exact path='/Home'>
              <Home />
            </Route>
            {/* Route for pantry app. Redirects to home if not logged int */}
            <Route exact path='/Pantry'>
              {this.state.loggedIn ? (<Pantry apiUrl={this.state.apiUrl}/>) : (<Redirect to="/Login"/>)}
            </Route>
            {/* Route for Login. Redirects to home if logged in */}
            <Route exact path='/Login'>
            {this.state.loggedIn ? (<Redirect to="/Home" />) : (<Login apiUrl={this.state.apiUrl}/>)}
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Container>
      
    )
  }
}
