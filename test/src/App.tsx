import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Price from './comps/Price'
import * as dotenv from 'dotenv'
dotenv.config()

function App() {
  const [count, setCount] = useState(0)
  
  
  console.log(process.env.API_KEY)
  

  return (
    <div className="App">
      <h1>Crypto Dashboard</h1>
        <Price></Price>
    </div>
  )
}

export default App
