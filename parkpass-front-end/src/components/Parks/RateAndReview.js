import React from 'react'
import FormikReviewForm from './RRForm';

export default function RatePark(props) {
  return (
    <div>
        <FormikReviewForm></FormikReviewForm>
        {props.review && props.review.map(reviews => (
            <div key={reviews.park_id}>
                <p>{reviews.rating}</p>
                <p>{reviews.comment}</p>
            </div>
        ))}
       </div>  

    );
 };
 
 
    

