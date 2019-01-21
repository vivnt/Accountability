import React from "react";
import {
  Container,
  Header,
  Checkbox
} from "semantic-ui-react";

class Tasks extends React.Component {

  render() {
    return (
      <Container>
        <Header as="h3">Tasks</Header>
        <Checkbox label="Task"/>
        <br/>
        <Checkbox label="Task"/>
        <br/>
        <Checkbox label="Task"/>
      </Container>
    );
  }
}

export default Tasks;
