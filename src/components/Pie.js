import React from 'react';
import {
  PieChart, Pie, Sector, Cell, Text
} from 'recharts';

const data = Array(49).fill(0).map((_, i) => {
  return ({
    value: 100
  })
})
const value = 31.331
const Index = ({size, value, title, unit}) => {
  const renderShape = (props) => {
    const {
      cx, cy, innerRadius, outerRadius, startAngle, endAngle,
    } = props;
    return (
      <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius+5}
      startAngle={startAngle}
      endAngle={endAngle}
      fill='purple'
      />
    )
  }
  const renderMinShape = (props) => {
    const {
      cx, cy, innerRadius, outerRadius, startAngle, endAngle,
    } = props;
    return (
      <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius-3}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      fill='#ccc'
      />
    )
  }

    return (<>
      <PieChart width={200} height={200} >
        <Pie
        data={data}
        activeIndex={24}
        activeShape={renderMinShape}
        cx='50%'
        cy='50%'
        startAngle={215}
        endAngle={-35}
        innerRadius='50%'
        outerRadius="55%"
        fill="#ccc"
        paddingAngle={2}
        minAngle={2}
        dataKey='value'
        >
         
        </Pie>
        <Pie
          data={data}
          activeIndex={24}
          activeShape={renderShape}
          cx='50%'
          cy='50%'
          startAngle={210}
          endAngle={-30}
          innerRadius='65%'
          outerRadius='80%'
          fill="#ccc"
          paddingAngle={1.5}
          minAngle={1.5}
          dataKey='value'
        >
          {
            data.map((entry, index) => index < 25 && <Cell key={`cell-${index}`} 
            fill= {`hsla(${195-index*2}, 100%, 30%, 1)`}
            />)
          }
        </Pie>
        <g>
        <Text
        x={size/2}
        y={size/2}
        textAnchor='middle'
        verticalAnchor='middle'
        width={55}
        fill='#004097'
        fontWeight={900}
        >
          {`${value}\n${unit}`}
        </Text>
        <Text
          x={size/2}
          y={size*0.9}
          verticalAnchor='end'
          textAnchor='middle'
          fontWeight={900}
          fontSize="20"
        >
          {title}
        </Text>
        </g>
      </PieChart>
      </>
    );
}


export default ()=> <Index size={200} value={value} title='API每秒请求次数' unit='times/s' />