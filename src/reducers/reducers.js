import { combineReducers } from "redux";
import UserReducer from "./reducer-user";
import SaveUserReducer from "./reducer-save-user";

const allReducers = combineReducers({
  users: UserReducer,
  currentUser: SaveUserReducer
});

export default allReducers;
