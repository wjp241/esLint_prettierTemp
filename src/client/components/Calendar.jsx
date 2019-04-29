import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import moment from "moment";
import YrMon from "./YrMon.jsx";
import Days from "./Days.jsx";
const Calendar = () => {
  return (
    <Table responsive bordered>
      <thead>
        <YrMon />
        <Days />
      </thead>
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
