import React, { useState, useEffect } from 'react'
import Card from './components/card'

const colors = ['red','red','blue','blue','green','green','yellow','yellow','cyan','cyan','skyblue','skyblue'].sort(()=>Math.random()-0.5)

export default () => {
  const [colorList,setColorList] = useState(colors)
  const [bools,setBools] = useState((new Array(12)).fill(0))
  const [click,setClick] = useState(25)
  const [result,setResult] = useState('')
  useEffect(() => {
    if(click === 0 && bools.filter(d=>d!==2).length >1) {
      setResult('游戏失败')

    }else if (bools.filter(d=>d!==2).length === 0){
      setResult('游戏胜利')
    }
  },[click,bools])
  const replay = () => {
    setColorList(d=>d.sort(()=>Math.random()-0.5))
    setBools((new Array(12)).fill(0))
    setClick(25)
    setResult('')
  }
  const onClick = (i) => {
    if(result=='游戏失败') return
    const a = bools.filter(d=>d===1).length
    const q = bools.findIndex(d=>d===1)
    if(q===i) return
    if( a === 2) return
    setClick(d=>d-1)
    setBools(d=>d.map((item,j)=> (j===i && item ===0) ? 1 : item))
    if(a === 1) {
      if(colorList[i] === colorList[q]) {
        setTimeout(() => {
          setBools(d=>d.map((item,j) =>(j===q || j===i) ? 2 : item))
        },500)
      }else {
        setTimeout(() => {
          setBools(d=>d.map((item,j) =>item === 1 ? 0 : item))
        },1000)
      }
    }
  }
  return (
    <div style={{display:'flex',backgroundColor: 'khaki'}} >
      <div style={{width:250,display:'flex',flexWrap:'wrap'}}>
      {colorList.map((item,i)=><Card key={item+i} color={item} data={bools[i]} onClick={() => onClick(i)}  />)}
      </div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',height:60}}>剩余点击次数{click}</div>
        <button style={{width:100,height:80}} onClick={replay} >重新开始</button>
        <span>{result}</span>
      </div>
    </div>
  )
}