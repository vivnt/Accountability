import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Select, TextArea, Container } from 'semantic-ui-react'
import db from './firebase-config';
import auth from './firebase-config';

const gender = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]
const age = [
  { key: '0-18', text: '0-18 years', value: '0-18' },
  { key: '19-34', text: '19-34 years', value: '19-34' },
  { key: '35+', text: '35+ years', value: '35+' },
]
const timezone = [
  { key: 'GMT-1', text: 'GMT-1', value: 'GMT-1' },
  { key: 'GMT-2', text: 'GMT-2', value: 'GMT-2' },
  { key: 'GMT-3', text: 'GMT-3', value: 'GMT-3' },
  { key: 'GMT-4', text: 'GMT-4', value: 'GMT-4' },
  { key: 'GMT-5', text: 'GMT-5', value: 'GMT-5' },
  { key: 'GMT-6', text: 'GMT-6', value: 'GMT-6' },
  { key: 'GMT-7', text: 'GMT-7', value: 'GMT-7' },
  { key: 'GMT-8', text: 'GMT-8', value: 'GMT-8' },
  { key: 'GMT-9', text: 'GMT-9', value: 'GMT-9' },
  { key: 'GMT-10', text: 'GMT-10', value: 'GMT-10' },
  { key: 'GMT-11', text: 'GMT-11', value: 'GMT-11' },
  { key: 'GMT-12', text: 'GMT-12', value: 'GMT-12' },
  { key: 'GMT', text: 'GMT', value: 'GMT' },
  { key: 'GMT-1', text: 'GMT+1', value: 'GMT+1' },
  { key: 'GMT+2', text: 'GMT+2', value: 'GMT+2' },
  { key: 'GMT+3', text: 'GMT+3', value: 'GMT+3' },
  { key: 'GMT+4', text: 'GMT+4', value: 'GMT+4' },
  { key: 'GMT+5', text: 'GMT+5', value: 'GMT+5' },
  { key: 'GMT+6', text: 'GMT+6', value: 'GMT+6' },
  { key: 'GMT+7', text: 'GMT+7', value: 'GMT+7' },
  { key: 'GMT+8', text: 'GMT+8', value: 'GMT+8' },
  { key: 'GMT+9', text: 'GMT+9', value: 'GMT+9' },
  { key: 'GMT+10', text: 'GMT+10', value: 'GMT+10' },
  { key: 'GMT+11', text: 'GMT+11', value: 'GMT+11' },
  { key: 'GMT+12', text: 'GMT+12', value: 'GMT+12' },
  { key: 'GMT+13', text: 'GMT+13', value: 'GMT+13' },
  { key: 'GMT+14', text: 'GMT+14', value: 'GMT+14' },
]

class SignUp extends Component {
  state = {}

handleClick() {
  auth.createUserWithEmailAndPassword("vivian@me.com", "password").catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  // db.collection("users").doc("LA").set({name: "Los Angeles", state: "CA", country: "USA"}).then(function() {
  //   console.log("Document successfully written!");
  // }).catch(function(error) {
  //   console.error("Error writing document: ", error);
  // });
}

  render() {
    return (<Container text="text">
      <Form>
        {/*<Form.Field required control={Input} label='Email' placeholder='Email'/>
        <Form.Field required control={Input} label='Password' placeholder='Password'/>
        <Form.Field required control={Input} label='Password' placeholder='Password'/>*/}
        <Form.Field required control={Button} onClick={this.handleClick}>Submit</Form.Field>
      </Form>

      {/* TODO: Add after creating the user
        <Form>
          <Form.Group widths='equal'>
            <Form.Field control={Input} label='First name' placeholder='First name' />
            <Form.Field control={Select} label='Gender' options={gender} placeholder='Gender' />
          </Form.Group><Form.Group widths='equal'>
            <Form.Field control={Select} label='Age' options={age} placeholder='Age' />
            <Form.Field control={Select} label='Timezone' options={timezone} placeholder='Timezone' />
          </Form.Group>
          <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
          <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
        */
      }
    </Container>)
  }
}

export default SignUp;
