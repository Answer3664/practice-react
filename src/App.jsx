import React, { Component } from 'react'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class APP extends Component {

  state = {todos: [
    {id:"1", name:'eating', done:true},
    {id:"2", name:'sleeping', done:false},
    {id:"3", name:'coding', done:false}

  ]}

  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({todos:newTodos})
  }

  updateTodo = (id, done) => {
    const {todos} = this.state
    const newTodos = todos.map((todo)=>{
      if (todo.id === id) return {...todo, done}
      else return todo
    })
    this.setState({todos: newTodos})
  }

  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter((todo)=>{
      return todo.id !== id
    })
    this.setState({todos: newTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div>
        <Header addTodo={this.addTodo}/>
        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
        <Footer/>
      </div>
    )
  }
}
