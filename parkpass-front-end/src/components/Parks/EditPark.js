import React, { useState } from 'react'
import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { axiosWithAuth } from '../../utils/api'

export default function EditPark({ parkToEdit }) {

  const [data, setData] = useState({
    id: parkToEdit.id,
    name: parkToEdit.name,
    description: parkToEdit.description,
    location: parkToEdit.location
  })

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
      .put(`https://park-passport.herokuapp.com/api/parks/${data.id}`, {
        name: data.name,
        description: data.description,
        location: data.location
      })
      .then(res => {
        console.log(res)
      })
  }

  return (
    <div>     

      <Form onSubmit={handleSubmit}>
        <FormGroup>       
         <Col sm={6}>         
          <Label for='name' sm={2}>Park Name</Label>          
            <Input 
              type="text"
              name="name"
              placeholder="Enter Park Name"
              value={data.name}
              onChange={handleChange}
            />
          </Col>
          </FormGroup>

          <FormGroup >
          <Col sm={6}> 
          <Label for='description' sm={2}>Description</Label>        
          <Input
            name="description"
            placeholder="Enter Description"
            value={data.description}
            onChange={handleChange}
          />
          </Col>
          </FormGroup>

          <FormGroup >
          <Col sm={6}> 
          <Label for='location' sm={2}>Location</Label>        
          <Input 
            type="text"
            name="location"
            placeholder="Enter Location"
            value={data.location}
            onChange={handleChange}
          />
        </Col>
        </FormGroup>

        <FormGroup >
          <Col sm={6}>
          <Button type="submit">Save</Button>
          </Col>
        </FormGroup>

      </Form>
    </div>
  )
}
