import React, { useState } from 'react';
import { withFormik, Formik, Form, Field } from 'formik';
import { axiosWithAuth } from '../../utils/api';

/* Set slices of state for form */
const RRForm = ({ values, park }) => {
  
 /* Add Form */
  return (
    <div className='Review'>
             <Form>
             <Field 
                type='hidden'
                id='park_id'
                name='park_id'
                placeholder=''
                value={values.park_id}
              />  
               <Field 
                type='text'
                id='rating'
                name='rating'
                placeholder='rating'
                value={values.rating}
              />        
               <Field 
                type='text'
                id='comment'
                name='comment'
                placeholder='comment'
                value={values.comment}
              />   
              <button type="submit">Submit</button>
     
          </Form> 
   </div>
  );
};


 
const FormikReviewForm = withFormik({
  mapPropsToValues({ park, rating, comment }) {
    return {
      park_id: park.id || '',
      rating: rating || '',
      comment: comment || ''
    };
  },
  handleSubmit(values, tools) {
    axiosWithAuth()
    .post('https://park-passport.herokuapp.com/api/parks/ratings/test', values) 
    .then(res => {
      console.log("fired", res);
    })
    .catch(err => console.log(err));
  }
})(RRForm);
console.log(FormikReviewForm);
/* Add hover & heart ranks */     

export default FormikReviewForm;
             
           
                
                
                






 

