import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import YrMon from "./YrMon.jsx";
import WkDays from "./WkDays.jsx";
import Dates from "./Dates.jsx";

const Calendar = () => {
  return (
    <Table responsive bordered>
      <thead>
        <YrMon />
      </thead>
      <tbody>
        <WkDays />
        <Dates />
      </tbody>
    </Table>
  );
};

const mapStateToProps = state => ({ firstday: state.firstday });
const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    dispatch(event.target.value);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
