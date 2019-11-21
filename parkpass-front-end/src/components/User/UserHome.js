import React, { useContext } from 'react'
import { FavesContext } from '../../contexts/FavesContext'

export default function UserHome() {
  const username = localStorage.getItem('username')
  const faves = useContext(FavesContext)
  console.log('faves', faves)

  return (
    <div>
      <p>{username}</p>
      <h1>My Favorites</h1>
      {faves && faves.map((fav, index) => {
        return (
          <div key={index}>
            <h3>{fav.name}</h3>
            <p>{fav.description}</p>
          </div>
        )
      })}
    </div>
  )
}
