import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ParkReviewsForm from "./ParkReviews";
 

const DisplayParkReviews = props => {
  const [parkReviews, setParkReviews] = useState([])
  useEffect(() => {
    const getParkReviews = () => {
      const id = 6;
      axios
        .get(`https://park-passport.herokuapp.com/api/parks/${id}/ratings`)
        .then(response => {
          setParkReviews(response.data);
          console.log(response);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getParkReviews();
  }, []);

  return (
    <div >
      {parkReviews.map(parkReview => (
        <ReviewDetails id={parkReview.id} parkReview={parkReview} />
      ))}
    </div>
  );
}

function ReviewDetails({ parkReview }) {
  const { name, id, username, rating, comment } = parkReview;
  return (
    <div >
      <div>
        <h2>{parkReview.username}</h2>
        <div>
          Rating: <em>{parkReview.rating}</em>
        </div>
        <div>
          Comment: <strong>{parkReview.comment}</strong>
        </div>
      </div>
    </div>
  );
}

export default DisplayParkReviews;