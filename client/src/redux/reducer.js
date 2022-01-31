import { combineReducers } from "redux";

const changeBackgroundColor = (state = "rgb(117, 133, 150, 0.9)", action) => {
  switch (action.type) {
    case "DRIVER":
      return (state = "rgb(97, 194, 110, 0.9)");
    case "DECREMENT":
      return (state = "rgb(135, 206, 250, 0.9)");
    default:
      return state;
  }
};
