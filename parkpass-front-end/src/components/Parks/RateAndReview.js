import React from 'react'


export default function RatePark(props) {
  return (
    <div className='RatePark'>
        {props.review.map(reviews => (
            <div key={reviews.id}>
                <h2>{reviews.name}</h2>
                <p>{reviews.location}</p>
                <p>{reviews.description}</p>
            </div>
        ))}
       </div>                     
    );
 };
 
 
    

