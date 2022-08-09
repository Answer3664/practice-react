import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'
export default class List extends Component {

  state = {users: [],
    isFirst: true,
    isLoading: false,
    err:""
  }

  componentDidMount(){
    this.token = PubSub.subscribe('zdliu', (msg, stateObj)=>{
      this.setState(stateObj)
    })
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }

  render() {
    const {users, isFirst, isLoading, err} = this.state
    return (
      <div>
        {
          isFirst ? <h2>Welcome to this page, you can search for users in Github.</h2> :
          isLoading ? <h2>Loading...</h2> :
          err ? <h2 style={{color: 'red'}}>{err}</h2> : 
          users.map((user)=>{
            return (
              <div key={user.id} className='card'>
                <a rel='noreferrer' href={user.html_url} target="_blank">
                    <img src={user.avatar_url} style={{width: '100px'}} alt="avatar" />
                </a>
                <p className='card-text'>{user.login}</p>
              </div>)
          })
        }
      </div>
    )
  }
}
