import React from "react";
import dateFns from "date-fns";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import addMonth from "./../actionCreators/addMonth";
import subtractMonth from "./../actionCreators/subtractMonth";

const YrMon = props => {
  const dateFormat = "MMMM YYYY";

  return (
    <tr>
      <th colSpan="7" className="text-center">
        <Button onClick={props.handleSubtractMonth} />
        {dateFns.format(props.currentMonth, dateFormat)}
        <Button onClick={props.handleAddMonth} />
      </th>
    </tr>
  );
};

const mapStateToProps = state => ({ currentMonth: state.currentMonth });
const mapDispatchToProps = dispatch => ({
  handleAddMonth() {
    dispatch(addMonth());
  },
  handleSubtractMonth() {
    dispatch(subtractMonth());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YrMon);
