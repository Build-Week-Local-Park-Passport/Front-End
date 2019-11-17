import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {

  const signout = e => {
    e.preventDefault()
    localStorage.removeItem('token')
    // need to bring this up to top level to be able to push to home page after signout
  }

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/account">Account</Link>

        <button onClick={signout}>Signout</button>
      </nav>
    </div>
  )
}