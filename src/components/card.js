import React from 'react'


export default ({data,color,onClick}) => {
  if(data === 2) {
    return <div style={{width:70,height:70,margin:3}} ></div>
  }
  return (
    <div style={{width:70,height:70,backgroundColor:`${data ? color : 'ivory'}`,margin:3,borderRadius:4}} onClick={onClick}>
    </div>
  )
}