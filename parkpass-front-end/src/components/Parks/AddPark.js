import React, {useState } from 'react';
import { withFormik, Form, Field } from 'formik';

export default function AddPark({ values }) {
  const [park, setPark] = useState([]);

  return (
    <div className='add-park'>

      {/* Input Fields  */}

      <Form>
        <Field 
          id='park'
          name='park'
          placeholder='Park'
          />
        <Field
          id='location'
          name='location'
          placeholder='Location'
          /> 

    {/* Ammenities Checkboxes */}

          <label className='checkbox-container'>
            Dog Park
            <Field
              type='checkbox'
              name='dog_park'
              checked={values.dog_park}
            />
            <span className='checkmark' />
            Pool
            <Field
              type='checkbox'
              name='pool'
              checked={values.pool}       
             />
            <span className='checkmark' />
            Hiking
            <Field 
              type='checkbox'
              name='hiking'
              checked={values.hiking}      
            />
            <span className='checkmark' />
            Waterfalls
            <Field 
              type='checkbox'
              name='waterfalls'
              checked={values.waterfalls}            
            />
            <span className='checkmark' />
            Disc Golf
            <Field 
              type='checkbox'
              name='disc_golf'
              checked={values.disc_golf}           
             />
             <span className='checkmark' />
             Picnic Area
             <Field 
              type='checkbox'
              name='picnic_area'
              checked={values.picnic_area}           
             />
             <span className='checkmark' />
          </label>  
         <button>Submit</button>
        </Form> 
      </div>
  );
}    

    {/* mPTV destructuring */}

    const FormikAddPark = withFormik({
          mapPropsToValues({park, location}) {
            return {
              park: park || '',
              location: location || '',
            };
          }
        })


 
       
 {/* Add New Park f() */}

      //   const addNewPark = parks => {
      //     const newPark = {
      //       id: Date.now(),
      //       park: parks.park,
      //       location: parks.location 
      //     };
      //     setPark([...park, newPark]);
      //   };    


      //  const submitForm = event => {
      //   event.preventDefault();
      //   props.addNewPark(park);
      //   setPark({ park: '', location: '' })
      //  }



    
/* Need: redirect to login or form to add new park to parks list 

Form Fields: Park Name, Location. 

Ammenities list: check-box or drop-down?

Validation for login: redirect to sign-up/login if !


*/