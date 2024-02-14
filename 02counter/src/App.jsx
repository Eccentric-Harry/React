import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
//  let counter = 15;
 const addValue = ()=>
 {
  // console.log("Value Added", counter);
  // counter+=1;
  if(counter <19)
  {
    setCounter(counter+1)
  }
  else
  {
    setCounter(20)
  }
  
 }
 
 const removeValue = ()=>
 {
  if(counter >0)
  {
    setCounter(counter-1)
  }
  else
  {
    setCounter(0)
  }
 }
  return (
    <>
      <h1>COUNTER PROJECT</h1>
      <h3>Counter Value = {counter}</h3>
      <button onClick={addValue}>Add Counter {counter}</button>
      <br />
      <button onClick={removeValue}>Remove counter {counter}  </button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
 