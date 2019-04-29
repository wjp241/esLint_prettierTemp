import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import moment from "moment";

const Calendar = props => {
  const weekdayshort = moment.weekdaysShort();
  return (
    <Table responsive bordered>
      <thead>
        <tr>
          {weekdayshort.map(day => {
            return (
              <th key={day} className="text-center">
                {day}
              </th>
            );
          })}
        </tr>
      </thead>
    </Table>
  );
};

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    dispatch(event.target.value);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
