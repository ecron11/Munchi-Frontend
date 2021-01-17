import React, { Component } from 'react'
import TopNav from './TopNav';
import Home from './Pages/Home/Home';
import Pantry from './Pages/Pantry/Pantry';
import Login from './Pages/Login/Login';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      loggedIn: false,
      user: {},
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
      <Router>
        <div className="container">
        <TopNav loggedIn={this.state.loggedIn} user={this.state.user}/>
        </div>
        <Switch>
          <Route exact path='/Home' component={Home} />
          {/* Route for pantry app. Redirects to home if not logged int */}
          <Route exact path='/Pantry'>
            {this.state.loggedIn ? (<Pantry apiUrl={this.state.apiUrl}/>) : (<Redirect to="/Home"/>)}
          </Route>
          {/* Route for Login. Redirects to home if logged in */}
          <Route exact path='/Login'>
           {this.state.loggedIn ? (<Redirect to="/Home" />) : (<Login />)}
          </Route>
        </Switch>
      </Router>
    )
  }
}
