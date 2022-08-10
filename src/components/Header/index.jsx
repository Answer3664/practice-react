import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
        <div>
            <h1>React Router Demo</h1>
            <button onClick={() => this.props.history.goBack()}>Back</button>&nbsp;
            <button onClick={() => this.props.history.goForward()}>Forward</button>&nbsp;
            <button onClick={() => this.props.history.go(-2)}>Go</button>&nbsp;
        </div>
    )
  }
}

export default withRouter(Header) // withRouter can turn common component into route component, so this component has the route api including history, etc.