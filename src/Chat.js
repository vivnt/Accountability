import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Container, Header, List, Image } from "semantic-ui-react";
import db from "./firebase-config";
import React from "react";

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
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
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
    users: state.users
  };
}

export default connect(mapStateToProps)(Chat);
