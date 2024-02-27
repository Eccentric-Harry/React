
import {useState} from "react"
function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-100" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 ">
        <div className="flex flex-wrap justify-center gap-3 outline-none bg-white rounded-3xl px-3 py-2">
          <button onClick={()=>setColor('blue')} className="outline-none px-3 rounded-full text-white" style={{backgroundColor:'blue'}}>BLUE</button>
          <button onClick={()=>setColor('gold')} className="outline-none px-3 rounded-full text-white" style={{backgroundColor:'GOLD'}}>GOLD</button>
          <button onClick={()=>setColor('orange')} className="outline-none px-3 rounded-full text-white" style={{backgroundColor:'orange'}}>ORANGE</button>
          <button onClick={()=>setColor('magenta')} className="outline-none px-3 rounded-full text-white" style={{backgroundColor:'magenta'}}>MAGENTA</button>
          <button onClick={()=>setColor('purple')} className="outline-none px-3 rounded-full text-white" style={{backgroundColor:'purple'}}>PURPLE</button>
        </div>
      </div>
    </div>
  )
}
export default App
