import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home"
import SignUp from "./SignUp"
import SignIn from "./SignIn"

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
    </div>
  </Router>
);

export default AppRouter;
