import React, { useState } from 'react';
import { withFormik, Formik, Form, Field, setNestedObjectValues } from 'formik';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import { axiosWithAuth } from '../../utils/api';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


/* Set slices of state for form */

const useStyles = makeStyles({
  textField: {
    "border": "1px solid lightgray",
    padding: "10px 10px",
    borderRadius: "5px"
  },
  button: {
    "border": "none",
    padding: "10px 20px",
    borderRadius: "5px",
    boxShadow: "1px 10px 5px -6px rgba(194,194,194,1)"
  }
});

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
  const classes = useStyles();

 /* Add Form */
console.log(values);
  return (
    <div className='Review'>
          <Form>
            <div>
              <Field 
                type='text'
                id='comment'
                name='comment'
                placeholder="Leave a Comment"
                value={values.comment}
                className={classes.textField}
              />
              <br></br><br></br>   

             <StyledRating
              name="simple-controlled"
              value={value}
              icon={<FavoriteIcon fontSize="inherit" />}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
             />
             <br></br><br></br>
             <button type="submit" className={classes.button}>SUBMIT</button>

              </div>
        </Form> 
   </div>
  );
};      
         
const FormikReviewForm = withFormik({
  mapPropsToValues({ park, rating, comment }) {
    return {
      park_id: park.id || '',
      comment: comment || '',
      rating: rating || ''
    };
  },
  handleSubmit(values, tools) {
    axiosWithAuth()
      .post(`https://park-passport.herokuapp.com/api/parks/ratings/test`, values)          
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
                  
    


 

           
                
                
                






 

