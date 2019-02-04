import React, { Component } from "react";
import { Button, Form, Input, Container } from "semantic-ui-react";
import { db, auth } from "./firebase-config";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { saveUserAction } from "./actions/index";

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

            db.collection("users")
              .doc(user.uid)
              .get()
              .then(function(doc) {
                if (doc.exists) {
                  app.props.saveUserAction({
                    uid: user.uid,
                    email: user.email,
                    firstName: doc.data().firstName,
                    age: doc.data().age,
                    timezone: doc.data().timezone,
                    gender: doc.data().gender
                  });
                } else {
                  // doc.data() will be undefined in this case
                  // TODO: Send error and redirect to create profile page
                  // console.log("No such document!");
                }
              });
            // .catch(function(error) {
            //TODO: Handle error
            // console.log("Error getting document:", error);
            // });

            // TODO: Redirect after sign in
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

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ saveUserAction: saveUserAction }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(SignIn);
