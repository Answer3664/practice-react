import React, { Component } from 'react'
import {useParams} from "react-router-dom"
const detailData = [
    {id: '01', content: '01 detaildata'},
    {id: '02', content: '02 detaildata'},
    {id: '03', content: '03 detaildata'},
]

// export default class Detail extends Component {
    
//     render() {
//         // const {id, title} = this.props.match.params  // receive the params send by Route (params)
//         console.log(this.props)
//         const {id, title} = this.props.location.state || {}
//         const findResult = detailData.find((cur)=>{
//             return cur.id===id
//         }) || {}
//         return (
//             <ul>
//                 <li>
//                     ID: {id}
//                 </li>
//                 <li>
//                     Title: {title}
//                 </li>
//                 <li>
//                     Content: {findResult.content}
//                 </li>
//             </ul>
//         )
//     }
// }

export default function Detail() {
    let {state} =  useParams()
    console.log(state)
    const {id, title} = state
    // const {id, title} = this.props.location.state || {}
    const findResult = detailData.find((cur)=>{
        return cur.id===id
    }) || {}
    return (
        <ul>
            <li>
                ID: {id}
            </li>
            <li>
                Title: {title}
            </li>
            <li>
                Content: {findResult.content}
            </li>
        </ul>
    )
}

