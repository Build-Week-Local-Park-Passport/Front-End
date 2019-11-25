import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    alignItems: "center"
  },
  title: {
    display: "flex",
    justifyContent: "center"
  },
  name: {
    textTransform: "uppercase"
  },
  list: {
    border: "1px solid black",
    backgroundColor: "green",
    alignItems: "center"
  }
});


export default function UserHome({ faves, remove }) {
  const username = localStorage.getItem('username');
  const classes = useStyles();


  return (
  <div>
    <div className={classes.list}>
      <h2>{username}'s Favorites</h2>
      </div>

    <div>
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
  </div>
  )
};
