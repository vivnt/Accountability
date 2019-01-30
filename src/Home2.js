import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectUser, saveUserAction } from "./actions/index";

class App extends React.Component {
  createListItems() {
    return this.props.users.map(user => {
      return (
        <li key={user.id} onClick={() => this.props.selectUser(user)}>
          {user.name}
        </li>
      );
    });
  }

  handleClick() {
    this.props.saveUserAction({
      id: 1,
      name: "Vivian"
    });
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <h1>ID: {this.props.currentUser.id}</h1>
        </div>
      );
    }
    return (
      <div>
        {this.createListItems()}
        <button className="ui button" onClick={this.handleClick()}>
          Click Here
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    activeUser: state.activeUser,
    currentUser: state.currentUser
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectUser: selectUser, saveUserAction: saveUserAction },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(App);
