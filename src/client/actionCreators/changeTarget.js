import { CHANGE_TARGET } from "../actions";
const changeTarget = target => {
  return {
    type: CHANGE_TARGET,
    payload: target
  };
};

export default changeTarget;
