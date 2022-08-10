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

3. We can use `state` <br>
    `<Link to={{pathname: '/home/message/detail', state: {id: id, title: title}}}>{title}</Link>` <br>
    `<Route path="/home/message/detail" component={Detail}></Route>`<br>
    `const {id, title} = this.props.location.state || {}` <br>
    when refresh the page, the content still exist.

### API 

1. The route component has all properities in this.props.history, such as push, replace, goBack, goForward, go. This means we can not only use <Link> to jump to traget page, but also use this API to go particular pages.


    



