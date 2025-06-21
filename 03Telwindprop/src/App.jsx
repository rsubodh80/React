import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myobject = {
    name: "Subodh", 
    age: 25,
    city: "Pune"
  }
  let newArray = [1, 2, 3, 4, 5]


  return (
    <>
  <h1 >Hello</h1>
  <Card username="raaaaj"/>
  <Card username="sUBoDh"/>

    </>
  )
}

export default App
