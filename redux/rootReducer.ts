// ** Reducers Imports
import { combineReducers } from "redux";

import { user, users, category, lesson } from "./";
// ** Reducers Imports
const rootReducer = combineReducers({
  user,
  users,
  category,
  lesson,
});

export default rootReducer;
