import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter] = useState(15)

   const addVal = () => {
    setCounter(counter ++ )
   }
    
   const removeVal = () => {
    setCounter(counter -- )
   }

  return (
    <>
      <h1>Chai Aur React </h1>
      <h3>Counter Value : {counter} </h3>
      <button onClick={addVal}>Add Value : {counter}</button>
      <br />
      <button
      onClick={removeVal}
      >Remove Value : {counter}</button>
    </>
  )
}

export default App
