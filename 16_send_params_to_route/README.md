## How to send param from the link to Route and then the component can use it

1. we can use `params` <br>
    `<Link to={/home/message/detail/id/title}>{mes.title}</Link>` <br>
    `<Route path="/home/message/detail/:id/:title" component={Detail}></Route>`<br>
    `const {id, title} = this.props.match.params`  // receive the params send by Route <br>

