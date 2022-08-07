import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {


    search = () => {
        const {keyWordElement: {value: keyword}} = this  // const {a:{b:data}} = obj
        this.props.updateAppState({isFirst: false, isLoading: true})

        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
            response => {
                this.props.updateAppState({isLoading: false, users: response.data.items})
                // console.log(response.data)
            },
            error => {
                this.props.updateAppState({isLoading: false, err: error.message})
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
