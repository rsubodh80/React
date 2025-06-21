import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

     let [counter, setCouner]=  useState(15)
  
     //let counter = 15
     const addvalue = () => {
 
      if(counter >= 20){
        alert("Counter value should not be greater than 20")
        return;
      } 
      
  //counter = counter + 1;
      setCouner(counter +1)
     }

      const decValue = () => {
        if(counter <= 0){
          alert("Counter value should not be less than 0")
          return;
        }
        //counter = counter - 1;
        setCouner(counter -1)
      
      }
  return (
   
    <>
    <div className="A">
    <div className="ubodh">
    <h1 class = "bodh">sUBoDh</h1>
    <h1>coffie</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addvalue}>Add Value{counter}</button>
    <br></br>
    <br />
    
    <p>footer:{counter}</p>  
    </div>  
    <div className="ubodh">
    <h1 class = "bodh">sUBoDh</h1>
    <h1>coffie</h1>
    <h2>Counter value:{counter}</h2>
    
    
  
    <button onClick={decValue}>Decrease Value{counter}</button>
    <p>footer:{counter}</p>  
    </div> 
    </div>
         </>
  )
}

export default App
