import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Api from './components/Api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Api/>
    
    </div>
  )
}

export default App