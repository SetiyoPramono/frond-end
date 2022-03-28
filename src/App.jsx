import { useState } from 'react'
import Headers from './components/Headers'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     
    <Headers />
    <Main />
    </div>
  )
}

export default App
