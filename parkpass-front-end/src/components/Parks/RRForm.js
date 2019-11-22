import React, { useState } from 'react';
import { withFormik, Formik, Form, Field, setNestedObjectValues } from 'formik';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import { axiosWithAuth } from '../../utils/api';

/* Set slices of state for form */

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

const RRForm = ({ values, park }) => {
  const [value, setValue] = useState(0);

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
               {/* <Field 
                type='text'
                id='rating'
                name='rating'
                placeholder='Rating'
                value={values.rating}
              />         */}
             <StyledRating
              name="simple-controlled"
              value={value}
              icon={<FavoriteIcon fontSize="inherit" />}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              
            /><br></br>

               <Field 
                type='text'
                id='comment'
                name='comment'
                placeholder='Comment'
                value={values.comment}
              /><br></br>   
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
      tools.resetForm();
      })
      .catch(err => console.log(err));
    }
  })(RRForm);
  console.log(FormikReviewForm);
/* Add hover & heart ranks */     

export default FormikReviewForm;
             
           
                
                
                






 

