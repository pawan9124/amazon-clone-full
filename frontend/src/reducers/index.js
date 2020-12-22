import { combineReducers } from "redux";
import authReducers from "./authReducers";
import errorReducers from "./errorReducer";
import addressReducers from "./addressReducers";
import ordersReducers from "./ordersReducer";

export default combineReducers({
  auth: authReducers,
  errors: errorReducers,
  address: addressReducers,
  orders: ordersReducers,
});
