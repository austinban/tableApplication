import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Profile from './ProfileID'
import List from './List'

function App() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path=":id" element={<Profile />} />
    </Routes>
  )
}

export default App
