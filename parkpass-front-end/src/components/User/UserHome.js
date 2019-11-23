import React from 'react'

export default function UserHome({ faves, remove }) {
  const username = localStorage.getItem('username')

  return (
    <div>
      <p>{username}</p>
      <h1>My Favorites</h1>
      {faves && faves.map((fav, index) => {
        console.log(fav)
        return (
          <div key={index}>
            <h3>{fav.name}</h3>
            <p>{fav.description}</p>
            <button onClick={() => remove(fav)}>Remove</button>
          </div>
        )
      })}
    </div>
  )
}
