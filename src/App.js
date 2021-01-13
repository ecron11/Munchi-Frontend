import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import React from 'react'
import TopNav from './TopNav'
import Pantry from './Pages/Pantry/Pantry'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'

export default function App() {
  return (
    <Router>
      <div className="container">
        <TopNav />
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Pantry' component={Pantry} />
        <Route exact path='/Login' component={Login} />
      </Switch>
    </Router>      
  )
}
