import React, { Component } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  TextArea,
  Container
} from "semantic-ui-react";
import { db, auth } from "./firebase-config";

const gender = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" }
];
const age = [
  { key: "0-18", text: "0-18 years", value: "0-18" },
  { key: "19-34", text: "19-34 years", value: "19-34" },
  { key: "35+", text: "35+ years", value: "35+" }
];
const timezone = [
  { key: "GMT-1", text: "GMT-1", value: "GMT-1" },
  { key: "GMT-2", text: "GMT-2", value: "GMT-2" },
  { key: "GMT-3", text: "GMT-3", value: "GMT-3" },
  { key: "GMT-4", text: "GMT-4", value: "GMT-4" },
  { key: "GMT-5", text: "GMT-5", value: "GMT-5" },
  { key: "GMT-6", text: "GMT-6", value: "GMT-6" },
  { key: "GMT-7", text: "GMT-7", value: "GMT-7" },
  { key: "GMT-8", text: "GMT-8", value: "GMT-8" },
  { key: "GMT-9", text: "GMT-9", value: "GMT-9" },
  { key: "GMT-10", text: "GMT-10", value: "GMT-10" },
  { key: "GMT-11", text: "GMT-11", value: "GMT-11" },
  { key: "GMT-12", text: "GMT-12", value: "GMT-12" },
  { key: "GMT", text: "GMT", value: "GMT" },
  { key: "GMT+1", text: "GMT+1", value: "GMT+1" },
  { key: "GMT+2", text: "GMT+2", value: "GMT+2" },
  { key: "GMT+3", text: "GMT+3", value: "GMT+3" },
  { key: "GMT+4", text: "GMT+4", value: "GMT+4" },
  { key: "GMT+5", text: "GMT+5", value: "GMT+5" },
  { key: "GMT+6", text: "GMT+6", value: "GMT+6" },
  { key: "GMT+7", text: "GMT+7", value: "GMT+7" },
  { key: "GMT+8", text: "GMT+8", value: "GMT+8" },
  { key: "GMT+9", text: "GMT+9", value: "GMT+9" },
  { key: "GMT+10", text: "GMT+10", value: "GMT+10" },
  { key: "GMT+11", text: "GMT+11", value: "GMT+11" },
  { key: "GMT+12", text: "GMT+12", value: "GMT+12" },
  { key: "GMT+13", text: "GMT+13", value: "GMT+13" },
  { key: "GMT+14", text: "GMT+14", value: "GMT+14" }
];

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var user = auth.currentUser;

    if (!user) {
      // User is signed in.
      this.props.history.push("/signin");
    } else {
      this.setState({
        email: user.email,
        uid: user.uid
      });
    }
  }

  saveProfile = () => {
    db.collection("users")
      .doc(this.state.uid)
      .set({ firstName: this.state.firstName, gender: this.state.gender })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };

  signOut = () => {
    auth.signOut().then(
      function() {
        console.log("Signed Out");
        this.props.history.push("/signin");
      },
      function(error) {
        console.error("Sign Out Error", error);
      }
    );
  };

  handleChange = (e, target) => {
    this.setState({ [target.id]: target.value });
  };

  handleSubmit = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <Container text>
        <h1>Profile</h1>
        <Form>
          <Form.Field
            control={Input}
            value={this.state.email}
            onChange={this.handleChange}
            disabled
            name="email"
            label="Email"
            placeholder="Email"
          />
          <Form.Field
            disabled
            control={Input}
            onChange={this.handleChange}
            name="password"
            type="password"
            label="Password"
            placeholder="Password"
          />
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              id="firstName"
              onChange={this.handleChange}
              label="First name"
              placeholder="First name"
            />
            <Form.Field
              control={Select}
              label="Gender"
              id="gender"
              onChange={this.handleChange}
              options={gender}
              placeholder="Gender"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Select}
              label="Age"
              onChange={this.handleChange}
              id="age"
              options={age}
              placeholder="Age"
            />
            <Form.Field
              control={Select}
              label="Timezone"
              onChange={this.handleChange}
              id="timezone"
              options={timezone}
              placeholder="Timezone"
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            label="About"
            placeholder="Tell us more about you..."
          />
          <Form.Field
            control={Checkbox}
            label="I agree to the Terms and Conditions"
          />
          <Form.Field control={Button} onClick={this.saveProfile}>
            Submit
          </Form.Field>
        </Form>

        <Form>
          <Form.Field required control={Button} onClick={this.signOut}>
            Sign Out
          </Form.Field>
        </Form>
      </Container>
    );
  }
}

export default Profile;
