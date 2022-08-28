## State Hook
1. The state hook can be used in function component, it seems like the `state = {key: value}` in class component <br>
2. Usage: `const [xxx, setxxx] = React.useState(initState)`, `xxx` is the state you defined before, `setxxx` is the function, you can use it to do what you want to state.
3. There are two actions you can take in `setxxx`. Firstly, you can `setCount(count+1)`. Secondly, you can `setCount(count => count+1)`

## Effect Hook

1. Effect Hook can be seen as a life cycle hook
2. Usage: `React.useEffect(function, [stateValue])`, you can do what you want in `function`
3. If you want to simulate `componentWillUnmont()`, you need to return a function in `function` you pass.
   
## Ref Hook
Ref Hook can be used in function component, it seems like the `React.createRef()` in class component
`const myRef = React.useRef()`
    



