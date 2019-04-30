import { combineReducers } from "redux";
import currentMonth from "./currentMonth";
import target from "./target";
import show from "./show";

export default combineReducers({
  currentMonth,
  target,
  show
});
