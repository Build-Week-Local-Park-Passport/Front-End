import React, { useState } from 'react';
import { withFormik, Formik, Form, Field } from 'formik';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
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



const RRForm = ({ values, event }) => {
  const [value, setValue] = useState(0);
 
  /* Add Form */
console.log(values);

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
               <Field 
                type='text'
                id='comment'
                name='comment'
                placeholder='Comment'
                value={values.comment}
              /><br></br>   

             <StyledRating
              name='simple-controlled'
              value={value}
              icon={<FavoriteIcon fontSize="inherit" />}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
             />
             <br></br>

            <Button 
              type='submit'
              variant='contained'
              color='primary'
              endIcon=
              {<SendIcon>Send</SendIcon>}>
            </Button>

        </Form> 
   </div>
  );
};      
         
const FormikReviewForm = withFormik({
  mapPropsToValues({ park, name, username, rating, comment }) {
    return {
      park_id: park.id || '',
      name: name || '',
      uername: username || '',
      rating: rating || '{}',
      comment: comment || ''
    };
  },
  handleSubmit(values, tools) {
    axiosWithAuth()
      .post(`https://park-passport.herokuapp.com/api/parks/:id/ratings`, values)          
      .then(res => {
        console.log("fired", res);
      })
      .catch(err => console.log(err));
       tools.resetForm();
    } 
  })(RRForm);
  console.log(FormikReviewForm);
/* Add hover & heart ranks */     

export default FormikReviewForm;