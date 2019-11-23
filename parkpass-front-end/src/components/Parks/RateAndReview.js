import React from 'react'
import RRForm from './RRForm';

export default function RatePark(props) {
  return (
    <div>
        <RRForm park={props.park} />
        {props.review && props.review.map(reviews => (
            <div key={reviews.park_id}>
                <p>{reviews.rating}</p>
                <p>{reviews.comment}</p>
            </div>
        ))}
       </div>  

    );
 };
 
 
    

