import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Menu, Button } from "semantic-ui-react";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Profile from "./Profile";

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Container>
          <Menu fixed="top">
            <Container>
              <Menu.Item as={Link} to="/">
                Home
              </Menu.Item>
              <Menu.Item as={Link} to="/profile">
                Profile
              </Menu.Item>
              <Menu.Item position="right">
                <Button as={Link} to="/signin">
                  Sign In
                </Button>
                <Button as={Link} to="/signup" style={{ marginLeft: "15px" }}>
                  Sign Up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>

          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/profile" component={Profile} />
        </Container>
      </Router>
    );
  }
}

export default AppRouter;
