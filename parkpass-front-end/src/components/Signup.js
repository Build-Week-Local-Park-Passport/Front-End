import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Signup(props) {
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

    axios.post('https://park-passport.herokuapp.com/api/auth/register', data)
      .then(res => {
        // localStorage.setItem('token', res.data.token)
        console.log(res)
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
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login" >Login.</Link></p>
    </div>
  )
}