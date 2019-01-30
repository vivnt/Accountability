import { combineReducers } from "redux";
import UserReducer from "./reducer-user";
import ActiveUserReducer from "./reducer-active-user";
import SaveUserReducer from "./reducer-save-user";

const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer,
  currentUser: SaveUserReducer
});

export default allReducers;
