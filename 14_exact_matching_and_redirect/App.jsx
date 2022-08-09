import React, { Component } from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'

import Home from './components/home/Home'
import About from './components/about/About'
export default class App extends Component {
  
  render() {
    return (
      <>
        <div>
          <NavLink to='/home'>Home</NavLink><br/>
          <NavLink to='/about'>About</NavLink>
        </div>
        <div>
          <Switch>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Redirect to='/home'></Redirect>
          </Switch>
        </div>
       </>
      
    )
  }
}
