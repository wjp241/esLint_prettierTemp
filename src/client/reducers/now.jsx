import moment from "moment";

const nowReducer = (state = moment(), action) => {
  if (action.type === "GET_NOW") {
    return action.payload;
  } else {
    return state;
  }
};
export default nowReducer;
