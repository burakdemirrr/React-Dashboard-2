import React from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import "./chart.scss"
function Chart() {
  const data=[
    {name:"January",Total:1200},
    {name:"February",Total:1700},
    {name:"March",Total:800},
    {name:"April",Total:1100},
    {name:"May",Total:550},

  ]
  
  return (
    <div className='chart'>
      <h3 className="title">Last 6 Months (Revenue)</h3>
    <ResponsiveContainer width="97%" aspect={7 /2} className="areac">

     <AreaChart width={530} height={250} data={data} 
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" stroke="#fff" />
  <YAxis  stroke="#fff"/>
  <CartesianGrid strokeDasharray="3 2" />
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
</AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart