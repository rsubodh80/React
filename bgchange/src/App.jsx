import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive")


  return (
    
   <div className="w-full h-screen duration-200"
   style={{ backgroundColor: color }}
   >
    <h1
    className="text-3xl text-center font-bold text-white pt-10  border-solid border-b-2 border-white"
    >MY NAME IS SUBODH RAJ SAH</h1>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3-2 rounded-xl">

        <button 
        onClick={() => setColor("red")}
        className="outline-none px-4  rounded-full text-white shadow-lg" 
        
         style={{ backgroundColor: "red" }}
         >Red</button>


         <button 
          onClick={() => setColor("green")}
         className="outline-none px-4  rounded-full text-white shadow-lg" 
        
         style={{ backgroundColor: "green" }}
         >green</button>

         <button 
         onClick={() => setColor("blue")}
         className="outline-none px-4  rounded-full text-white shadow-lg" 
        
         style={{ backgroundColor: "blue" }}
         >blue</button>

         <button
         onClick={() => setColor("yellow")}
         className="outline-none px-4  rounded-full text-white shadow-lg" 
        
         style={{ backgroundColor: "yellow" }}
         >yellow</button>

         <button 
         onClick={() => setColor("skyblue")}
         className="outline-none px-4  rounded-full text-black shadow-lg" 
        
         style={{ backgroundColor: "skyblue" }}
         >skyblue</button>

      </div>
      </div>

   </div>

  )
}

export default App
