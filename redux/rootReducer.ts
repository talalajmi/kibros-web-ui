// ** Reducers Imports
import { combineReducers } from "redux";

import { user, users, category } from "./";
// ** Reducers Imports
const rootReducer = combineReducers({
  user,
  users,
  category,
});

export default rootReducer;
