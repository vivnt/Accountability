import { Container, Header, List, Image } from "semantic-ui-react";
import db from "./firebase-config";
import React from "react";

// TODO: Need to add listener to firebase

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

  render() {
    return (
      <Container>
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

export default Chat;
