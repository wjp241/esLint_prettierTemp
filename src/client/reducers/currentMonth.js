import dateFns from "date-fns";
const currentMonthReducer = (state = new Date(), action) => {
  switch (action.type) {
    case "ADD_MONTH":
      return dateFns.addMonths(state, 1);
    case "SUBTRACT_MONTH":
      return dateFns.subMonths(state, 1);
    default:
      return state;
  }
};
export default currentMonthReducer;
