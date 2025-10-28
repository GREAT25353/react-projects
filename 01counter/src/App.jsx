import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  let frameIncrease = () =>{
    if(counter<20)
      setCounter(counter + 1)
  }
  let frameDecrease = () =>{
    if(counter>0)
      setCounter(counter - 1)
  }

  return (
    <>
      <h1 className='text-3xl'>This is the counter</h1>
      <br />
      <h3 className='text-xl'>Add Value:{counter}</h3>
      <h3 className='text-xl my-2'>Remove Value:{counter}</h3>
      <button onClick={frameIncrease} className=' text-xl bg-red-800 text-blue-400 rounded-3xl px-3 py-1 my-2'>Add value </button>
      <br />
      <button onClick={frameDecrease} className=' text-xl bg-red-800 text-blue-400 rounded-3xl px-3 py-1 my-2'>Remove value</button>
    </>
  )
}

export default App
