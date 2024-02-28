import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)

  return (
    <>
      <h1 className='text-white text-center text-4xl'>Password Generator</h1>
    </>
  )
}

export default App
