import React from 'react'
import './App.css';
import ResponsiveContainer from "./components/barChart/ResponsiveContainer";


function App() {

  return (
    <div className="App">
      <ResponsiveContainer height={500} data={data} />
    </div>
  );
}

export default App;

const data = [
  {label: "Jan", value: 100},
  {label: "Feb", value: 25},
  {label: "Mar", value: 135},
  {label: "Apr", value: 125},
  {label: "May", value: 76},
  {label: "Jun", value: 46},
  {label: "Jul", value: 46},
  {label: "Aug", value: 46},
  {label: "Sep", value: 46},
  {label: "Oct", value: 46},
  {label: "Nov", value: 46},
]
