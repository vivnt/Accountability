import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Menu, Button, Icon } from "semantic-ui-react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Profile from "./Profile";

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: ""
    };
  }

  changeActiveItem = (e, { name }) => this.setState({ activeItem: name });

  renderRightMenu() {
    if (this.props.currentUser != null) {
      return (
        <div>
          <Menu.Item
            as={Link}
            to="/profile"
            name="/profile"
            onClick={this.changeActiveItem}
          >
            <Icon size="large" name="user circle" />
            {this.props.currentUser.firstName}
          </Menu.Item>
        </div>
      );
    } else {
      return (
        <div>
          <Button
            as={Link}
            to="/signin"
            active={this.state.activeItem === "/signin"}
            name="/signin"
            onClick={this.changeActiveItem}
          >
            Sign In
          </Button>
          <Button
            as={Link}
            to="/signup"
            active={this.state.activeItem === "/signup"}
            name="/signup"
            onClick={this.changeActiveItem}
            style={{ marginLeft: "1em" }}
          >
            Sign Up
          </Button>
        </div>
      );
    }
  }
  render() {
    return (
      <Router>
        <Container style={{ marginTop: "6em" }}>
          <Menu pointing secondary fixed="top" size="large">
            <Container>
              <Menu.Item
                header
                as={Link}
                to="/"
                name=""
                onClick={this.changeActiveItem}
              >
                Accountability
              </Menu.Item>
              <Menu.Item
                as={Link}
                to="/"
                active={this.state.activeItem === ""}
                name=""
                onClick={this.changeActiveItem}
              >
                Home
              </Menu.Item>

              <Menu.Item
                as={Link}
                to="/profile"
                name="/profile"
                active={this.state.activeItem === "/profile"}
                onClick={this.changeActiveItem}
              >
                Profile
              </Menu.Item>
              <Menu.Item position="right">{this.renderRightMenu()}</Menu.Item>
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

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(AppRouter);
