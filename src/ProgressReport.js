import React from "react";
import {
  Container,
  Grid,
  Header,
} from "semantic-ui-react";

class ProgressReport extends React.Component {

  render() {
    return (
      <Container>
        <Header as="h3">Progress Report</Header>
        <div className="ui cards">
          <div className="card">
            <div className="content">
              <div className="header">Matt
              </div>
              <div className="description">
                <div className="description">
                  <Grid.Row>
                    <span className="right floated">
                      75%
                    </span>
                    <span>
                      <i className="check icon"></i>
                      Tasks
                    </span>
                  </Grid.Row>
                  <Grid.Row>
                    <span className="right floated">
                      100%
                    </span>
                    <span>
                      <i className="user icon"></i>
                      Habits
                    </span>
                  </Grid.Row>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="header">Molly</div>
              <div className="description">
                <Grid.Row>
                  <span className="right floated">
                    50%
                  </span>
                  <span>
                    <i className="check icon"></i>
                    Tasks
                  </span>
                </Grid.Row>
                <Grid.Row>
                  <span className="right floated">
                    85%
                  </span>
                  <span>
                    <i className="user icon"></i>
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

export default ProgressReport;
