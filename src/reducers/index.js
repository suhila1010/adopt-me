import { combineReducers } from "redux";
import location from "./location.js";
import breed from "./breed";
import theme from "./theme";
import animal from "./animal";

export default combineReducers({
  location,
  breed,
  animal,
  theme,
});
