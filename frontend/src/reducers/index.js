import { combineReducers } from "redux";
import authReducers from "./authReducers";
import errorReducers from "./errorReducer";
import addressReducers from "./addressReducers";

export default combineReducers({
  auth: authReducers,
  errors: errorReducers,
  address: addressReducers,
});
