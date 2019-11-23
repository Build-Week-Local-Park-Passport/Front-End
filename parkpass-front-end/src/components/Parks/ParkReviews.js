import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import axios from "axios";
import { withFormik, Formik, Form, Field } from 'formik';
import { axiosWithAuth } from '../../utils/api';



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: "20px auto",
    boxShadow: "0 8px 40px -15px rgba(0,0,0,0.3)",
    "borderRadius": "5px",
    "textDecoration": "none"
    },
  details: {
    marginTop: "10px",
    textAlign: "left"
  },
  box: {
    marginTop: "20px",
    marginBottom: "-10px"
  }
}));

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);


const ParkReviews = ({ name, id, username, rating, comment }) => {
  const [parkReview, setParkReview] = useState([]);
 
  useEffect(() => {
    const id = 6;
       axios
        .get(`https://park-passport.herokuapp.com/api/parks/${id}/ratings`)
        .then(response => {
            const currentReview = response.data
          setParkReview({
            name: name,
            id: id,
            username: username,
            rating: rating,
            comment: comment
          });
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);
  

  if (!parkReview) {
    return <div>No comments so far...</div>;

  }
  return (
      <div>
        <h2>{username}</h2>
        <h2>{name}</h2>
        <h2>{id}</h2>
        <div>
          Rating: <em>{rating}</em>
        </div>
        <div>
          Comment: <strong>{comment}</strong>
        </div>
      </div>
  );
}

export default ParkReviews;