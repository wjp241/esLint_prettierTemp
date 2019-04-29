import React from "react";
import dateFns from "date-fns";
import { connect } from "react-redux";

const Dates = props => {
  const { currentMonth, selectedDate } = props;
  const monthStart = dateFns.startOfMonth(currentMonth);
  const monthEnd = dateFns.endOfMonth(monthStart);
  //first and last dates for the first and last weeks of month
  const startDate = dateFns.startOfWeek(monthStart);
  const endDate = dateFns.endOfWeek(monthEnd);

  const dateFormat = "D";
  const rows = [];
  let day = startDate;
  let formattedDate = "";
  // const onDateClick = day => {
  //   this.setState({
  //     selectedDate: day
  //   });
  // };
  while (day <= endDate) {
    const days = [];
    for (let i = 0; i < 7; i++) {
      formattedDate = dateFns.format(day, dateFormat);
      days.push(
        <td key={formattedDate} className="text-center">
          <span className="number">{formattedDate}</span>
        </td>
      );
      day = dateFns.addDays(day, 1);
    }
    rows.push(<tr>{days}</tr>);
  }
  return rows;
  // return (
  // <div className="body">{rows}</div>
  // );
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
)(Dates);
