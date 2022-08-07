import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {

  getStudentData = ()=>{
    axios.get('http://localhost:3000/api1/students').then(   // If 3000 do not have api1/students, then client will go setupProxy.js to find real path
      response => {console.log('success', response.data)},
      error => {console.log('failed', error);}
    )
  }
  getCarData = ()=>{
    axios.get('http://localhost:3000/api2/cars').then(
      response => {console.log('success', response.data)},
      error => {console.log('failed', error);}
    )
  }
  
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>click me to get student data</button>
        <button onClick={this.getCarData}>click me to get car data</button>
      </div>
    )
  }
}
