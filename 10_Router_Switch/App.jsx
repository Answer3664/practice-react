import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'

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
            <Route path='/home' component={Home}/>
            <Route path='/about' component={About}/>
          </Switch>
        </div>
       </>
      
    )
  }
}
