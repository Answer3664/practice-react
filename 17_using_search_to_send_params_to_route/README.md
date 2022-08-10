## How to send param from the link to Route and then the component can use it

1. we can use `params` <br>
    `<Link to={/home/message/detail/id/title}>{mes.title}</Link>` <br>
    `<Route path="/home/message/detail/:id/:title" component={Detail}></Route>`<br>
    `const {id, title} = this.props.match.params`  // receive the params send by Route <br>

2. We can use `search` <br>
    `<Link to={/home/message/detail/?id=id&title=title}>{mes.title}</Link>  ` <br>
    `<Route path="/home/message/detail" component={Detail}></Route>`<br>
    `const {search} = this.props.location`  // using search to receive the params send by Route <br>
    `import qs from 'qs'`  // import the package <br>
    `const {id, title} = qs.parse(search.slice(1))` <br>


