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
          const currentReview = response.data
          setParkReviews({
            name: currentReview.name,
            id: currentReview.id,
            username: currentReview.username,
            rating: currentReview.rating,
            comment: currentReview.comment
        });
        console.log(response);
      })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
  }, []);

  return (
    <section>

    {parkReviews.map(parkReview => (
      <ParkReviewsForm 
      name={parkReview.name} 
      id={parkReview.id} 
      username={parkReview.username}
      rating={parkReview.rating} 
      comment={parkReview.comment} 
      />
    ))}
  </section>
  );

}


export default DisplayParkReviews;