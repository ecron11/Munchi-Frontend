import React, { Component } from 'react'
import TopNav from './TopNav';
import Home from './Pages/Home/Home';
import Pantry from './Pages/Pantry/Pantry';
import Login from './Pages/Login/Login';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       user: {}
    }
  }
  
  componentDidMount() {
    fetch('http://localhost:3000/auth/checkCurrentUser',{
    credentials: 'include'})
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        user: data.user
      })
    })
  }

  render() {
    return (
      <Router>
        <div className="container">
        <h1></h1>
        <TopNav name={this.state.user.firstName ? this.state.user.firstName : ""}/>
        </div>
        <Switch>
          <Route exact path='/Home' component={Home} />
          <Route exact path='/Pantry' component={Pantry} />
          <Route exact path='/Login' component={Login} />
        </Switch>
      </Router>
    )
  }
}
