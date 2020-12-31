import Axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    //Apply token to every request
    Axios.defaults.headers.common["Authorization"] = token;
  } else {
    //delete the token from the auth headers
    delete Axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
