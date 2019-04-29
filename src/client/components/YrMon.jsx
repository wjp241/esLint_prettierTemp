import React from "react";
import moment from "moment";

const YrMon = () => {
  const yrMonth = moment().format("YYYY MMMM");
  return (
    <tr>
      <th colSpan="7" className="text-center">
        {yrMonth}
      </th>
    </tr>
  );
};

export default YrMon;
