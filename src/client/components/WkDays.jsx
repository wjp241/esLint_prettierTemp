import React from "react";
import { connect } from "react-redux";
import dateFns from "date-fns";
const WkDays = props => {
  const dateFormat = "dddd";
  const days = [];
  const startDate = dateFns.startOfWeek(props.currentMonth);
  for (let i = 0; i < 7; i++) {
    days.push(
      <td key={i} className="text-center">
        {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
      </td>
    );
  }

  return <tr> {days}</tr>;
};

const mapStateToProps = state => ({ currentMonth: state.currentMonth });
const mapDispatchToProps = dispatch => ({
  // handleAddMonth() {
  //   dispatch(addMonth());
  // },
  // handleSubtractMonth() {
  //   dispatch(subtractMonth());
  // }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WkDays);
