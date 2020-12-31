import axios from "axios";

//Register user
export const createProduct = (productDetail, history) => (dispatch) => {
  try {
    axios
      .post("/products/create", productDetail)
      .then((res) => {
        history.push("/");
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
