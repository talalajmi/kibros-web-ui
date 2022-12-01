// ** Reducers Imports
import { combineReducers } from "redux";

import { user, category } from "./";
// ** Reducers Imports
const rootReducer = combineReducers({
  user,
  category,
});

export default rootReducer;
