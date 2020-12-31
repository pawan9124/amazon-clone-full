import isEmpty from "../validations/isEmpty";

const initialState = {
  address: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
}
