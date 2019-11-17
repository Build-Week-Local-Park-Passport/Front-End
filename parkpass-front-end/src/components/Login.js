import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Login(props) {
  const [data, setData] = useState({
    username: '',
    password: ''
  })

  useEffect(() => {
    localStorage.getItem('token') && props.history.push('/')
  }, [])

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    axios.post('https://park-passport.herokuapp.com/api/auth/login', data)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('username', data.username)
        props.history.push('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="username"
          placeholder="Username"
          value={data.username}
          onChange={handleChange}
        />
        <input 
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up.</Link></p>
    </div>
  )
}
