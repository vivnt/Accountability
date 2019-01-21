import React from "react";
import {
  Container,
  Header,
  Checkbox
} from "semantic-ui-react";

class Habits extends React.Component {

  render() {
    return (
      <Container>
        <Header as="h3">Habits</Header>
        <Checkbox label="Habit"/>
        <br/>
        <Checkbox label="Habit"/>
        <br/>
        <Checkbox label="Habit"/>
      </Container>
    );
  }
}

export default Habits;
