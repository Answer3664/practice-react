import React, { Component } from 'react'


const detailData = [
    {id: '01', content: '01 detaildata'},
    {id: '02', content: '02 detaildata'},
    {id: '03', content: '03 detaildata'},
]

export default class Detail extends Component {
  render() {
    const {id, title} = this.props.match.params  // receive the params send by Route 
    const findResult = detailData.find((cur)=>{
        return cur.id===id
    })
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
}
