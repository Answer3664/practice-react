import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {

    state = {
        messageArr:[
            {id: '01', title: 'message1'},
            {id: '02', title: 'message2'},
            {id: '03', title: 'message3'}
        ]
    }
    

    render() {
        const {messageArr} = this.state
        return (
            <div>
                <hr />
                <ul>
                    {
                        messageArr.map((mes)=>{
                            return (
                                <li key={mes.id}>
                                    {/* <Link to={`/home/message/detail/${mes.id}/${mes.title}`}>{mes.title}</Link> */}
                                    {/* <Link to={`/home/message/detail/?id=${mes.id}&title=${mes.title}`}>{mes.title}</Link> */}
                                    <Link to={{pathname: '/home/message/detail', state: {id: mes.id, title: mes.title}}}>{mes.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <Switch>
                    {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}
                    {/* <Route path="/home/message/detail" component={Detail}></Route> */}
                    <Route path="/home/message/detail" component={Detail}></Route>
                </Switch>
            </div>
        )
    }
}
