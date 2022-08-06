import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'

export default class Header extends Component {

  // set limit to addTodo
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleKeyUp  = (event)=>{
    if (event.key !== 'Enter') return
    if (event.target.value.trim() === "") return 
    const todoObj = {id:nanoid(), name:event.target.value, done:false}
    this.props.addTodo(todoObj)
    event.target.value = ""
  }



  render() {
    return (
      <div>
        <input onKeyUp={this.handleKeyUp} style={{width:'15%'}} placeholder='Input todo, press Enter to add todo list' type="text"/>
      </div>
    )
  }
}
