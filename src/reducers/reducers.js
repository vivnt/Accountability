import { combineReducers } from "redux";
import SaveUserReducer from "./reducer-save-user";

const allReducers = combineReducers({
  currentUser: SaveUserReducer
});

export default allReducers;
