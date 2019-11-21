import React, { useState } from 'react'
import { axiosWithAuth } from '../../utils/api'

export default function EditPark({ parkToEdit }) {

  const [data, setData] = useState({
    id: parkToEdit.id,
    name: parkToEdit.name,
    description: parkToEdit.description,
    location: parkToEdit.location
  })

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
      .put(`https://park-passport.herokuapp.com/api/parks/${data.id}`, {
        name: data.name,
        description: data.description,
        location: data.location
      })
      .then(res => {
        console.log(res)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="name"
          placeholder="Park Name"
          value={data.name}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={data.description}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="location"
          placeholder="Location"
          value={data.location}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
