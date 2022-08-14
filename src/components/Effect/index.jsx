import React from 'react'

export default function Demo() {

    const [count, setCount] = React.useState(0)
    const myRef = React.useRef()

    // function cf(){
    //     setInterval(()=>{
    //         setCount(count=>count+1)
    //         setCount(count+1)
    //     }, 1000)
    // }
    // React.useEffect(cf, [])
    function add(){
        setCount((count)=>{return count+1})
    }
    function show(){
        alert(myRef.current.value)
    }
    return (
        <>
            <input type="text" ref={myRef}/>
            <h2>The number is: {count}</h2>
            <button onClick={add}>Add 1</button>
            <button onClick={show}>Show input</button>
        </>
        
    )
}
