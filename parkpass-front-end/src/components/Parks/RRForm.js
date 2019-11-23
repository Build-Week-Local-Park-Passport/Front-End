import React, { useState, useContext } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { axiosWithAuth } from '../../utils/api';
import { SignedInContext } from '../../contexts/SignedInContext';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

/* Set slices of state for form */

const useStyles = makeStyles({
  textField: {
    "border": "1px solid lightgray",
    padding: "10px 10px",
    borderRadius: "5px"
  },
  button: {
    "border": "none",
    padding: "10px 20px",
    borderRadius: "5px",
    boxShadow: "1px 10px 5px -6px rgba(194,194,194,1)"
  }
});

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

export default function RRForm({ values, park }) {

  const isSignedIn = useContext(SignedInContext)

  const initialState = {
    park_id: park.id,
    rating: '',
    comment: ''
  }

  const [data, setData] = useState(initialState);
  const [value, setValue] = useState(0)

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if(isSignedIn) {
      axiosWithAuth()
        .post(`https://park-passport.herokuapp.com/api/parks/ratings/test`, values)          
        .then(res => {
        console.log("fired", res);
        })
        .catch(err => {
          console.log(err)
        });
        setData(initialState)
    } else {
      alert('You must be logged in to do that.')
      window.location.href = '/login'
    }
  }
  
  const classes = useStyles();

 /* Add Form */
  return (
    <div className='Review'>
          <form onSubmit={handleSubmit}>            
             <TextField 
                type='hidden'
                id='park_id'
                name='park_id'
                margin="normal"
                label=''
                value={data.park_id}
                onChange={handleChange}
              />  
               {/* <TextField 
                type='text'
                id='rating'
                name='rating'
                label='Rating'
                value={data.rating}
              />         */}
               <TextField 
                type='text'
                id='comment'
                name='comment'
                margin="normal"
                label='Comment'
                value={data.comment}
                onChange={handleChange}
              /><br></br>   

             <StyledRating
              name="simple-controlled"
              value={value}
              icon={<FavoriteIcon fontSize="inherit" />}
              onChange={newValue => {
                setData({
                  ...data,
                  rating: newValue
                });
                setValue(newValue)
              }}
             />

             <br></br><br></br>
             <button type="submit" className={classes.button}>SUBMIT</button>

              </div>
        </Form> 
   </div>
  )
};