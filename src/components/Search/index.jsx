import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'


export default class Search extends Component {


    search = () => {
        const {keyWordElement: {value: keyword}} = this  // const {a:{b:data}} = obj

        // this.props.updateAppState({isFirst: false, isLoading: true})
        PubSub.publish('zdliu', {isFirst: false, isLoading: true})

        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
            response => {
                PubSub.publish('zdliu', {isLoading: false, users: response.data.items})
            },
            error => {
                PubSub.publish('zdliu', {isLoading: false, err: error.message})
            }
        )
    }
    render() {
        return (
            <section>
                <h3>Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder='enter the name you search' />&nbsp; 
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
