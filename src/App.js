import React from "react";
import {
  Container,
  Grid,
  Header,
  Checkbox,
  List,
  Image,
  Button
} from "semantic-ui-react";
import Calendar from "react-calendar";

import config from './firebase-config';
import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp(config);

const db = firebase.firestore()

const App = () => (
<div>
  <Grid style={{
      padding: "4em"
    }}>
    <Grid.Column width={3}>
      <Container>
        <Header as="h1" dividing="dividing">
          Calendar and Progress Report
        </Header>
        <Header as="h3">Calendar</Header>
        <Calendar/>
        <Header as="h3">Progress Report</Header>
        <div class="ui cards">
          <div class="card">
            <div class="content">
              <div class="header">Matt
              </div>
              <div class="description">
                <div class="description">
                  <Grid.Row>
                    <span class="right floated">
                      75%
                    </span>
                    <span>
                      <i class="check icon"></i>
                      Tasks
                    </span>
                  </Grid.Row>
                  <Grid.Row>
                    <span class="right floated">
                      100%
                    </span>
                    <span>
                      <i class="user icon"></i>
                      Habits
                    </span>
                  </Grid.Row>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="content">
              <div class="header">Molly</div>
              <div class="description">
                <Grid.Row>
                  <span class="right floated">
                    50%
                  </span>
                  <span>
                    <i class="check icon"></i>
                    Tasks
                  </span>
                </Grid.Row>
                <Grid.Row>
                  <span class="right floated">
                    85%
                  </span>
                  <span>
                    <i class="user icon"></i>
                    Habits
                  </span>
                </Grid.Row>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Grid.Column>
    <Grid.Column width={6}>
      <Container>
        <Header as="h1" dividing="dividing">
          Today's Date
        </Header>
        <Header as="h3">Habits</Header>
        <Checkbox label="Habit"/>
        <br/>
        <Checkbox label="Habit"/>
        <br/>
        <Checkbox label="Habit"/>
        <Header as="h3">Tasks</Header>
        <Checkbox label="Task"/>
        <br/>
        <Checkbox label="Task"/>
        <br/>
        <Checkbox label="Task"/>
      </Container>
    </Grid.Column>
    <Grid.Column width={6}>
      <Container>
        <Header as="h1" dividing="dividing">
          Chat
        </Header>
        <List>
          <List.Item>
            <Image avatar="avatar" src="favicon.ico"/>
            <List.Content>
              <List.Header as="a">Rachel</List.Header>
              <List.Description>
                Last seen watching{" "}
                <a>
                  <b>Arrested Development</b>
                </a>{" "}
                just now.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image avatar="avatar" src="favicon.ico"/>
            <List.Content>
              <List.Header as="a">Rachel</List.Header>
              <List.Description>
                Last seen watching{" "}
                <a>
                  <b>Arrested Development</b>
                </a>{" "}
                just now.
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
        <button class="ui button">Click Here</button>
      </Container>
    </Grid.Column>
  </Grid>
</div>

        );

export default App;
