import React from 'react'
import { NavLink } from 'react-router-dom'

function App() {
  const ids = ['1234', '5678', '9012']

  return (
    <div className="App">
      <ul>
        {ids.map((id) => (
          <li>
            <NavLink to={id}>Profile {id}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
