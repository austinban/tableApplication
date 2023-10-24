import React from 'react'
import { useParams } from 'react-router'

function App() {
  let { id } = useParams()

  return <div className="App">Profile id: {id}</div>
}

export default App
