import React, { Component } from 'react'

export default class Footer extends Component {

  handleCheckAll = (event)=>{                                                                                     
    this.props.checkAllTodo(event.target.checked)
  }

  clearTodoDone = ()=>{
    this.props.clearDone()
  }

  render() {
    const {todos} = this.props
    const doneCount = todos.reduce((pre, todo)=>{return pre + (todo.done ? 1 : 0)}, 0)
    const total = todos.length
    return (
      <div>
        <label>
        <input type="checkbox" checked={doneCount === total && total!==0} onChange={this.handleCheckAll}/>
        </label>
        <span>已完成{doneCount}/全部{total}</span>
        <button onClick={this.clearTodoDone}>清除已完成任务</button>
      </div>
    )
  }
}
