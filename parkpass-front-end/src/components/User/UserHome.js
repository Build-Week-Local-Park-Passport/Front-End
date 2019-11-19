import React from 'react'

export default function UserHome() {
  const username = localStorage.getItem('username')

  const dummyFaves = [
    {
      "id": 1,
      "name": "Warrior's Path",
      "description": "Our marina is the best!",
      "pool": false,
      "hiking": false,
      "fishing": false,
      "wildlife": false,
      "camping": false,
      "disc_golf": false,
      "dog_park": false,
      "picnic_area": false,
      "playground": false,
      "soccer_field": false,
      "paddle_boats": false,
      "tennis_courts": false,
      "walking_paths": false,
      "bird_watching": false,
      "volleyball_court": false,
      "basketball_court": false
    },
    {
      "id": 2,
      "name": "Bay's Mountain",
      "description": "Come see our big, beautiful wolves!",
      "pool": false,
      "hiking": false,
      "fishing": false,
      "wildlife": false,
      "camping": false,
      "disc_golf": false,
      "dog_park": false,
      "picnic_area": false,
      "playground": false,
      "soccer_field": false,
      "paddle_boats": false,
      "tennis_courts": false,
      "walking_paths": false,
      "bird_watching": false,
      "volleyball_court": false,
      "basketball_court": false
    }
  ]
  return (
    <div>
      <p>{username}</p>
      <h1>My Favorites</h1>
      {dummyFaves.map((fav, index) => {
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
