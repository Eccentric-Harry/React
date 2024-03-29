
import {useState} from "react"
function App() {
  const [color, setColor] = useState("olive")

  return (
      <div className="w-full h-screen duration-1000 " style={{backgroundColor: color}} >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
          <div className=" flex flexwrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button 
            onClick={()=> setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
            <button 
            onClick={()=> setColor("blue")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Blue"}}>Blue</button>
            <button 
            onClick={()=> setColor("green")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Green"}}>Green</button>
            <button 
            onClick={()=> setColor("gold")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"gold"}}>Yellow</button>
            <button 
            onClick={()=> setColor("lavender")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"lavender"}}>Lavender</button>
            <button 
            onClick={()=> setColor("purple")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>Purple</button>
          </div>
        </div>
      </div>

  )
}

export default App

// onClick ko ek function chahiye, so we are creating a callback function that return setcolor("color") and then return it to onClick