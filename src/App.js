import React, { useState } from 'react'
import './App.css';
import ResponsiveContainer from "./components/barChart/ResponsiveContainer";


function App() {
  const [chartData, setData] = useState(data)

  const changeData = () => {
    setData(chartData.map(data => ({...data, value: Math.round(Math.random() * 1000)})))
  }

  return (
    <div className="App">
      <button onClick={changeData}>Change data</button>
      <ResponsiveContainer height={500} data={chartData} />
    </div>
  );
}

export default App;

const data = [
  {label: "Jan", value: 100},
  {label: "Feb", value: 25},
  {label: "Mar", value: 189},
  {label: "Apr", value: 125},
  {label: "May", value: 76},
  {label: "Jun", value: 46},
  {label: "Jul", value: 46},
  {label: "Aug", value: 46},
  {label: "Sep", value: 46},
  {label: "Oct", value: 46},
  {label: "Nov", value: 46},
]
