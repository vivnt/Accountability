import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Container, Header, List, Image } from "semantic-ui-react";
import db from "./firebase-config";
import React from "react";
import { selectUser } from "./actions/index";

class Chat extends React.Component {
  handleClick() {
    db.collection("cities")
      .doc("LA")
      .set({ name: "Los Angeles", state: "CA", country: "USA" })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  }

  createListItems() {
    return this.props.users.map(user => {
      return (
        <li key={user.id} onClick={() => this.props.selectUser(user)}>
          {user.name}
        </li>
      );
    });
  }

  render() {
    if (this.props.activeUser) {
      return (
        <div>
          <h1>ID: {this.props.activeUser.id}</h1>
          <h1>NAME: {this.props.activeUser.name}</h1>
        </div>
      );
    }
    return (
      <Container>
        {this.createListItems()}
        <Header as="h1" dividing>
          Chat
        </Header>
        <List>
          <List.Item>
            <Image avatar src="favicon.ico" />
            <List.Content>
              <List.Header as="a">Rachel</List.Header>
              <List.Description>Last seen watching just now.</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image avatar src="favicon.ico" />
            <List.Content>
              <List.Header as="a">Rachel</List.Header>
              <List.Description>Last seen watching just now.</List.Description>
            </List.Content>
          </List.Item>
        </List>
        <button className="ui button" onClick={this.handleClick}>
          Click Here
        </button>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    activeUser: state.activeUser
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectUser: selectUser }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Chat);
