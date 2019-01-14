import React from "react";
import {
  Container,
  Grid,
  Header,
} from "semantic-ui-react";

class Toggle extends React.Component {

  render() {
    return (
      <Container>
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
    );
  }
}

export default Toggle;
