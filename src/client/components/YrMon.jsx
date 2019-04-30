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
      <th colSpan="7">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Button onClick={props.handleSubtractMonth} />
            <Button onClick={props.handleAddMonth} />
            {dateFns.format(props.currentMonth, dateFormat)}
          </div>
          <div>
            <Button>Events</Button>
            <Button>Add</Button>
          </div>
        </div>
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
