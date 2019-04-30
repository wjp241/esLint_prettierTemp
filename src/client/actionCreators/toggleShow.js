import { TOGGLE_SHOW } from "../actions";
const toggleShow = show => ({
  type: TOGGLE_SHOW,
  payload: show
});

export default toggleShow;
