import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Stories from './components/Stories.jsx'
import Feed from './components/Feed.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Stories />
      <Feed />

    </>
  )
}

export default App
