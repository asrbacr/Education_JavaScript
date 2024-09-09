import { useState } from 'react'
import './App.css'
import { CommentsList } from './components/CommentsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CommentsList />
    </>
  )
}

export default App
