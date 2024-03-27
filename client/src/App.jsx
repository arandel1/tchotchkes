import { useState } from 'react'
import Login from '../components/login'
import Register from '../components/register'


function App() {

  return (
    <>
      <h1>Welcome to Tchotchkes, Knick Knacks, and Oddities</h1>
      <Register register = { Register }/>
      <Login login = { Login }/>
    </>
  )
}

export default App
