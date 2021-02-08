import axios from "axios";

//Register user
export const createOrders = (ordersDetails, history) => (dispatch) => {
  try {
    axios
      .post("/api/payments/createOrders", ordersDetails)
      .then((res) => {
        dispatch({
          type: "SET_ORDERS",
          paylaod: res.data,
        });
        history.replace("/orders");
        dispatch({
          type: "EMPTY_BASKET",
        });
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

export const getOrders = (userId) => (dispatch) => {
  try {
    axios
      .get("/api/payments/getOrders", { params: { userId: userId } })
      .then((res) => {
        dispatch({
          type: "SET_ORDERS",
          payload: res.data,
        });
      })
      .catch((error) => {
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
