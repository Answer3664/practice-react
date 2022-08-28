import React, { Component } from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'

import Home from './components/Home/Home'
import About from './components/About/About'
export default class App extends Component {
  
  render() {
    return (
      <>
        <div>
          <NavLink to='/about'>About</NavLink><br/>
          <NavLink to='/home'>Home</NavLink>
        </div>
        <div>
          <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/about' component={About}/>
            <Redirect to='/about'></Redirect>
          </Switch>
        </div>
       </>
      
    )
  }
}
