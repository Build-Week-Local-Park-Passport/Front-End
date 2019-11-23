import React, { useState, useContext } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { axiosWithAuth } from '../../utils/api';
import { SignedInContext } from '../../contexts/SignedInContext';

/* Set slices of state for form */

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
             <br></br>
          <button type="submit">Submit</button>
        </form> 
   </div>
)}