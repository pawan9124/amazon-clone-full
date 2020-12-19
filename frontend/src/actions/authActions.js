import axios from "../axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

//This action for auth is called when an actons happen

//Register user
export const registerUser = (userData, history) => (dispatch) => {
  try {
    axios
      .post("/userAuth/register", userData)
      .then((res) => {
        document.getElementById("registerMessage").innerHTML =
          "User Registered Successfully!";
        history.push("/login");
      })
      .catch((error) => {
        console.log("error", error);
        dispatch({
          type: "GET_ERRORS",
          payload: error.response.data,
        });
      });
  } catch (error) {
    dispatch({
      type: "GET_ERRORS",
      payload: error.response.data,
    });
  }
};

//Login - Get the User token and save in the local storage
export const loginUser = (userData) => (dispatch) => {
  console.log("UserData---->", userData);
  try {
    axios
      .post("/userAuth/login", userData)
      .then((res) => {
        console.log("login response", res);
        //Save to localStorage
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);

        //Decoded the token to get the user data
        const decoded = jwt_decode(token);

        //Set the user
        dispatch(setCurrentUser(decoded));
      })
      .catch((err) => {
        console.log("ERORR", err);
        dispatch({
          type: "GET_ERRORS",
          payload: err.response.data,
        });
      });
  } catch (error) {
    dispatch({
      type: "GET_ERRORS",
      payload: error.response.data,
    });
  }
};

export const setCurrentUser = (decoded) => {
  return {
    type: "SET_CURRENT_USER",
    payload: decoded,
  };
};

export const logoutUser = () => (dispatch) => {
  //Remove the current user from localstorga
  localStorage.removeItem("jwtToken");
  //Remvoe auth header for future requests
  setAuthToken(false);
  //Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};