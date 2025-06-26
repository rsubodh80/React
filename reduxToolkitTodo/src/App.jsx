import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'; // adjust path as needed
import Todo from './components/Todo';       // adjust path as needed


function App() {
 

  return (
    <>
     <h1 class="text-3xl text-orange-700 font-bold underline bg-gray-800">
    Wel Come To The list
  </h1>
  <AddTodo/>
  <Todo/>
    </>
  )
}

export default App
