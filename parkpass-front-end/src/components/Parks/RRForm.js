import React, { useState } from 'react';
import { withFormik, Form, Field, } from 'formik';
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

const RRForm = (props) => {
  const [value, setValue] = useState(0);
  const [park, setPark] = useState('');

 /* Add Form */
//console.log(values);

  return (
    <div className='Review'>
          <Form>            
             <Field 
                type='hidden'
                id='park_id'
                name='park_id'
                placeholder=''
                value={value.park_id}
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
                value={value.comment}
              /><br></br>   

{/* * Add hover & heart ranks */}

             <StyledRating
              name="simple-controlled"
              value={value}
              icon={<FavoriteIcon fontSize="inherit" />}
              onChange={(event, newValue) => {
                setValue(newValue);
                //console.log(newValue);
              }}
             />
             <br></br>
          <button type="submit">Submit</button>
        </Form> 
         {park.map(parks => (
           <ul key={parks.id}>
             <li>Name: {parks.name}</li>
             <li>Id: {parks.id}</li>
             <li>Uername: {parks.username}</li>
             <li>Rating: {parks.rating}</li>
             <li>Comment: {parks.comment}</li>
             </ul>
         ))} 

      </div>
  );
};      
         
const FormikReviewForm = withFormik({
  mapPropsToValues({ park, rating, comment }) {
    return {
      park_id: park.id || '',
      rating: rating || false,
      comment: comment || ''
    };
  },
  handleSubmit(values, tools, {setPark}) {
    axiosWithAuth()
      .post(`https://park-passport.herokuapp.com/api/parks/ratings/test`, values)          
      .then(res => {
        setPark(res.data);
        console.log(res);
      })
      .catch(err => console.log(err));
       tools.resetForm();
    }, 
    
  })(RRForm);
  console.log(FormikReviewForm);
  
      

    

export default FormikReviewForm;
                  
    


 

           
                
                
                






 

