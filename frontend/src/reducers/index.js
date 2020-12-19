import { combineReducers } from "redux";
import authReducers from "./authReducers";
import errorReducers from "./errorReducer";

export default combineReducers({
  auth: authReducers,
  errors: errorReducers,
});
