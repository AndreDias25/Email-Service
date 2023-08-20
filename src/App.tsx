import { useState } from 'react'
import './App.css'
import PrimaryInputProps from './components/Input/PrimaryInput'

function App() {
  const [email, setEmail] = useState("")

  return (
    <div className='container'>
      <PrimaryInputProps value={email} onChange={event => setEmail(event.target.value)} name='email' label='Digite o seu email'></PrimaryInputProps>
    </div>
  )
}

export default App
