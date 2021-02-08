import axios from "axios";

//Register user
export const addAddress = (addressData, history) => (dispatch) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .post("/api/address/create", addressData)
        .then((res) => {
          dispatch({
            type: "SET_ADDRESS",
            paylaod: res.data,
          });
          history.push("/payment");
          resolve(res.data);
        })
        .catch((error) => {
          console.log("error", error);
          dispatch({
            type: "GET_ERRORS",
            payload: error.response.data,
          });
          reject(error);
        });
    } catch (error) {
      dispatch({
        type: "GET_ERRORS",
        payload: error.response.data,
      });
      reject(error);
    }
  });
};

export const getAddress = (userId) => (dispatch) => {
  try {
    axios
      .get("/api/address/get", {
        params: {
          userId: userId,
        },
      })
      .then((res) => {
        dispatch({
          type: "SET_ADDRESS",
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log("ERROR", error);
        dispatch({
          type: "GET_ERRORS",
          payload: error,
        });
      });
  } catch (error) {
    console.log("ERROR", error);
    dispatch({
      type: "GET_ERRORS",
      payload: error,
    });
  }
};
