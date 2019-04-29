import { SUBTRACT_MONTH } from "../actions";
const subtractMonth = currentMonth => ({
  type: SUBTRACT_MONTH,
  payload: currentMonth
});

export default subtractMonth;
