import { useState, useEffect } from 'react'
import axios from 'axios'

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token')

  return axios.create({
    headers: {
      'Authorization': token
    }
  })
}

export const useApi = () => {
  const [parks, setParks] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get('https://park-passport.herokuapp.com/api/parks')
      .then(res => {
        setParks(res.data)
      })
      .catch(err => {
        console.log('---Api Call Error---')
        console.log(err)
        setError(true)
      })
  }, [])

  return [parks, error]
}