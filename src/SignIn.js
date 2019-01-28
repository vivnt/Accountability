import React, { Component } from "react";
import { Button, Form, Input, Container } from "semantic-ui-react";
import { auth } from "./firebase-config";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var user = auth.currentUser;

    if (user) {
      // User is signed in.
      this.props.history.push("/profile");
    }
  }

  handleClick = () => {
    const app = this;
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {
        auth.onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            app.props.history.push("/");
          }
        });
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert(errorMessage);
        }
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <Container text>
        <h1>Sign In</h1>
        <Form>
          <Form.Field
            required
            control={Input}
            onChange={this.handleChange}
            name="email"
            label="Email"
            placeholder="Email"
          />
          <Form.Field
            required
            control={Input}
            onChange={this.handleChange}
            name="password"
            type="password"
            label="Password"
            placeholder="Password"
          />
          <Form.Field required control={Button} onClick={this.handleClick}>
            Submit
          </Form.Field>
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
        */}
      </Container>
    );
  }
}

export default SignIn;
