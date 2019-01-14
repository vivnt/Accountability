import React from "react";
import {
  Container,
  Header,
} from "semantic-ui-react";
import Calendar from "react-calendar";

class Toggle extends React.Component {

  render() {
    return (
      <Container>
        <Header as="h1" dividing="dividing">
          Calendar and Progress Report
        </Header>
        <Header as="h3">Calendar</Header>
        <Calendar/>
        </Container>
    );
  }
}

export default Toggle;
