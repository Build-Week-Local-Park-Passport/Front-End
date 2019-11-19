import React from 'react'
import { Link } from 'react-router-dom'
import { getToken } from '../../utils/getToken'
import { signout } from '../../utils/signout'

export default function Nav() {

  const signedIn = getToken()

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {!signedIn && <Link to="/login">Login</Link>}
        {!signedIn && <Link to="/signup">Signup</Link>}
        {signedIn && <Link to="/account">Account</Link>}

        <button onClick={e => signout(e)}>Signout</button>
      </nav>
    </div>
  )
}