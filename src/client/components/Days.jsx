import React from "react";
import moment from "moment";

const Days = () => {
  const weekdayshort = moment.weekdaysShort();
  return (
    <tr>
      {weekdayshort.map(day => {
        return (
          <th key={day} className="text-center">
            {day}
          </th>
        );
      })}
    </tr>
  );
};

export default Days;
