import React, { Component } from "react";
import { Button, Form, Input, Container } from "semantic-ui-react";
import { auth } from "./firebase-config";

class SignUp extends Component {
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
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function(error) {
        console.log(error);
        auth.onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            app.props.history.push("/profilel");
          }
        });
      })
      .then(function(results) {
        console.log(results);
      });
    //TODO: Write to DB for user information. Might want to move to profile loading screen
    // db.collection("users").doc("LA").set({name: "Los Angeles", state: "CA", country: "USA"}).then(function() {
    //   console.log("Document successfully written!");
    // }).catch(function(error) {
    //   console.error("Error writing document: ", error);
    // });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Container text>
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
            label="Password"
            placeholder="Password"
          />
          <Form.Field
            required
            control={Input}
            onChange={this.handleChange}
            name="confirmPassword"
            label="Password"
            placeholder="Password"
          />
          <Form.Field required control={Button} onClick={this.handleClick}>
            Submit
          </Form.Field>
        </Form>
      </Container>
    );
  }
}

export default SignUp;
