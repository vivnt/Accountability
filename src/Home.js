import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";

import Chat from "./Chat";
import Habits from "./Habits";
import Calendar from "./Calendar";
import ProgressReport from "./ProgressReport";
import Tasks from "./Tasks";

const App = () => (
  <div>
    <Grid
      columns={3}
      divided
      style={{
        padding: "4em"
      }}
    >
      <Grid.Column width={4}>
        <Container>
          <Calendar />
          <ProgressReport />
        </Container>
      </Grid.Column>
      <Grid.Column width={6}>
        <Header as="h1" dividing>
          Date
        </Header>
        <Habits />
        <Tasks />
      </Grid.Column>
      <Grid.Column width={6}>
        <Chat />
      </Grid.Column>
    </Grid>
  </div>
);

export default App;
