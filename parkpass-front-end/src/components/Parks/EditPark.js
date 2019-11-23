import React, { useState } from 'react'
import { axiosWithAuth } from '../../utils/api'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';

export default function EditPark({ parkToEdit, ...props }) {

  const useStyles = makeStyles(theme => ({
    container: {
      display: 'block',
      alignItems: "center",
      justifyContent: "center",
      maxWidth: 345,
      margin: "20px auto",
    },
    input: {
      margin: theme.spacing(1),
      marginTop: "20px"
    },
    button: {
      margintop: "20px"
    },
    dialog: {
      maxWidth: 345,
      display: "block"
      },
      fab: {
        margin: theme.spacing(1),
      }
  }));

  const classes = useStyles();

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
        props.history.push('/')
      })
  }

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            id="standard-basic"
            className={classes.textField}
            label="Park Name"
            margin="normal"
            name="name"
            value={data.name}
            onChange={handleChange}
            />
          <TextField
            id="standard-basic"
            className={classes.textField}
            label="Description"
            margin="normal"
            multiline
            rowsMax="4"
            name="description"
            value={data.description}
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            className={classes.textField}
            label="Location"
            margin="normal"
            name="location"
            value={data.location}
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon/>}
          >
          Save
        </Button>
      </form>
      {/* <form onSubmit={handleSubmit}>
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
      </form> */}
    </div>
  )
}
