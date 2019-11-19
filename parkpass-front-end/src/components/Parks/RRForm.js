import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

/* Set slices of state for form */

export default function RatePark(props) {
  const [review, setReview] = useState( {
    park: '',
    review: ''
  });

 /* Add Form */
  return (
    <div className='Review'>
      <div>{review}</div>

        <Formik 
          initalValues={{ park: '', revew: ' '}}
          onsubmit={handleSubmit}
          render={props => {
             <Form>
                <Field 
                  type='text' 
                  id='park'
                  name='park'
                  placeholder='Park'
                  />
              <Field 
                type='text'
                id='review'
                name='review'
                placeholder='Review'
              />        
          </Form> 
        }}
       />
   </div>
  )
}          
      
        
 
const FormikReviewForm = withFormik({
  mapPropsToValues({ park, review }) {
    return {
      park: park || '',
      review: review || ''
    };
  },
  handleSubmit(values, tools) {


  }

})
/* Add hover & heart ranks */             
             
           
                
                
                






 

