import isEmpty from "../validations/isEmpty";

const initialState = {
  address: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_ADDRESS":
      console.log("addres", action.payload);
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
}
