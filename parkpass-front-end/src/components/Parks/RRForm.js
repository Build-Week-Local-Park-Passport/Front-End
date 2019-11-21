import React, { useState } from 'react';
import { withFormik, Formik, Form, Field } from 'formik';
import { axiosWithAuth } from '../../utils/api';

/* Set slices of state for form */



const RRForm = ({ values }) => {
  

 /* Add Form */
  return (
    <div className='Review'>
             <Form>
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
  mapPropsToValues({ park_id, rating, comment }) {
    return {
      park_id: park_id || '',
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
             
           
                
                
                






 

