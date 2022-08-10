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
    
    replaceShow = (id, title) => {
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)
        // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)
        this.props.history.replace('/home/message/detail', {id, title})
    }
    pushShow = (id, title) => {
        // this.props.history.push(`/home/message/detail/${id}/${title}`)
        // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)
        this.props.history.push('/home/message/detail', {id, title})
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
                                    {/* <Link to={{pathname: '/home/message/detail', state: {id: mes.id, title: mes.title}}}>{mes.title}</Link> */}
                                    &nbsp;<button onClick={()=>this.pushShow(mes.id, mes.title)}>push</button>
                                    &nbsp;<button onClick={()=>this.replaceShow(mes.id, mes.title)}>replace</button>
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
                <button onClick={() => this.props.history.goBack()}>Back</button>&nbsp;
                <button onClick={() => this.props.history.goForward()}>Forward</button>&nbsp;
                <button onClick={() => this.props.history.go(-2)}>Go</button>&nbsp;
            </div>
        )
    }
}
