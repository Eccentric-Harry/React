import { useCallback, useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCBEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqurstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "`~!@#$%^&*()_+-=|}][{;:'?/.>,<";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => { passwordGenerator(); }, [numberAllowed, charAllowed, passwordGenerator, length]);

  const copyPass = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, password.length);
      window.navigator.clipboard.writeText(password);
    }
  }, [password]);

  return (
    <div className='rounded-3xl bg-gray-600 w-full max-w-md px-4 py-6 shadow-lg mx-auto'>
      <h1 className='text-white text-center text-4xl leading-none'>Password Generator</h1>

      <input
        type="text"
        value={password}
        className='outline-none px-3 py-2 mt-2 rounded-sm'
        placeholder="Password"
        readOnly
        ref={passwordRef}
      />
      <button onClick={copyPass} className='bg-blue-900 text-white px-2 py-2 rounded-sm hover:bg-blue-700 focus:outline-none hover:shadow-md'>Copy</button>
      <div id="form-check" className='mx-2 my-2 gap-2'>
        <input className="w-4 h-4" type="checkbox" defaultChecked={numberAllowed} id='characterInput' onChange={() => { setNumberAllowed(prev => !prev) }} />
        <label className="text-white px-1 py-1 text-xl" >Numbers</label>
      </div>
      <div className='mx-2 my-2'>
        <input className="w-4 h-4" type="checkbox" id='numbersInput' defaultChecked={charAllowed} onChange={() => { setCharAllowed(prev => !prev) }} />
        <label className="text-white px-1 py-1 text-xl" >Characters</label>
      </div>
      <div className='mx-2 my-2'>
        <input className="cursor-pointer" type="range" min={6} max={100} value={length} onChange={(e) => { setLength(e.target.value) }} />
        <label htmlFor="Length" className='text-white text-xl'> Length: {length}</label>
      </div>
    </div>
  );
}

export default App;
