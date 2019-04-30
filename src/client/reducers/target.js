const targetReducer = (state = [], action) => {
  console.log(action);
  if (action.type === "CHANGE_TARGET") {
    return [].concat(state, action.payload);
  }
  return state;
};
export default targetReducer;
