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
          initialValues={{ park: '', review: '' }}
          onsubmit={handleSubmit}
          render={props => {
             <Form>
                <Field 
                  type='text' 
                  id='name'
                  name='name'
                  placeholder='Name'
                  />
               <Field 
                type='text'
                id='location'
                name='location'
                placeholder='Location'
              />        
               <TextField 
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
      location: location || '',
      review: review || ''
    };
  },
  handleSubmit(values, tools) {
      console.log(values, tools);
  }

})
/* Add hover & heart ranks */             
             
           
                
                
                






 

