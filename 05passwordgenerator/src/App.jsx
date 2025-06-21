import { useState ,useCallback, useEffect, use, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false) ;
  
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  const passwordRef = useRef(null);



  //password generator
  const generatePassword = useCallback(()=>{
    let pass ="";
    let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberAllowed) str += "0123456789";
    if(characterAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";

    for(let i = 1; i < length; i++){
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char);

    
    }
    setPassword(pass)


  },[length, numberAllowed, characterAllowed , setPassword]) 
  
  useEffect(() => {generatePassword()},[length, numberAllowed, characterAllowed, generatePassword])
  

  
  
 

  return (
    <>
    <div className="w-full max-w-md mx-auto mt-10 px-5 py-5 bg-gray rounded-lg shadow-lg text-orange-500 bg-gray-800">
      <h1 className='text-black text-center my-3'>password generator</h1>
      <div className='flex shadow  bg-white round-lg overflow-hideen mb-5'> 
        <input
          type="text"
          value={Password}
          className='outline-none w-full px-3 py-2 '
          placeholder='Password'
          readOnly
          
        />
     
        <button 
          className='outline-none px-3 py-0.5 bg-blue-700 text-white shrink-0 '
          onClick={() => {
            
        
            navigator.clipboard.writeText(Password);
            alert("Password copied to clipboard!");
          }}
             >copy</button>

      </div>

      <div className='flex text-sm gap-x-2' >
        <div  className='flex item-center gap-x-1 ' >

          <input
          type="range"
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="">Length :{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
  <input
    type="checkbox"
    checked={numberAllowed}
    id='numberInput'
    onChange={() => {
      setNumberAllowed((prev) => !prev);
    }}
  />
  <label htmlFor="numberInput">Numbers</label>
</div>
<div className='flex items-center gap-x-1'>
  <input
    type="checkbox"
    checked={characterAllowed}
    id='characterInput'
    onChange={() => {  
      setCharacterAllowed((prev) => !prev);
    }}
  />
  <label htmlFor="characterInput">Characters</label>
</div>    
      </div>

      </div>

    </>
  )
}

export default App
