import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addCounter = () => {
    if (counter + 1 > 20) {
      alert('Limit exceeded')
    } else {
      setCounter(counter + 1)
    }
    ;
  }
  const removeCounter = () => {
    if (counter - 1 < 0) {
      alert('Value must be positive')
    } else {
      setCounter(counter - 1)
    }
    ;
  }

  return (
    <>

      <h1>Vite + React Test Counter {counter}</h1>
      <h3>Added Counter is</h3>

      <button onClick={addCounter}>Add Counter {counter}</button>
      <button onClick={removeCounter}>Remove Counter {counter}</button>

    </>
  )
}

export default App
