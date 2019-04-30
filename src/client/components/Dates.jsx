import React from "react";
import dateFns from "date-fns";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import changeTarget from "./../actionCreators/changeTarget";
import EventModal from "./EventModal.jsx";

const Dates = props => {
  const { currentMonth } = props;
  const monthStart = dateFns.startOfMonth(currentMonth);
  const monthEnd = dateFns.endOfMonth(monthStart);
  //first and last dates for the first and last weeks of month
  const startDate = dateFns.startOfWeek(monthStart);
  const endDate = dateFns.endOfWeek(monthEnd);

  const dateFormat = "D";
  const rows = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    const days = [];
    for (let i = 0; i < 7; i++) {
      formattedDate = dateFns.format(day, dateFormat);
      days.push(
        <td key={formattedDate} className="text-center">
          {!dateFns.isSameMonth(day, monthStart) ? (
            <Button variant="link" disabled>
              {formattedDate}
            </Button>
          ) : (
            <OverlayTrigger
              trigger="click"
              placement="top"
              overlay={<EventModal />}
            >
              <Button variant="outline-primary">{formattedDate}</Button>
            </OverlayTrigger>
          )}
        </td>
      );
      day = dateFns.addDays(day, 1);
    }
    rows.push(<tr>{days}</tr>);
  }
  return rows;
};

const mapStateToProps = state => ({
  target: state.target,
  currentMonth: state.currentMonth
});
const mapDispatchToProps = dispatch => ({
  handleAttachRef(target) {
    dispatch(changeTarget(target));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dates);
