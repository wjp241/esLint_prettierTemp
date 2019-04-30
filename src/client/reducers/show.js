const showReducer = (state = false, action) => {
  if (action.type === "TOGGLE_SHOW") {
    return state === false ? true : false;
  }
  return state;
};
export default showReducer;
