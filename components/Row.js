import React, { FunctionComponent } from "react";

const Row = ({ label, value }) => {
  return (
    <tr>
      <td>
        <strong>{label}</strong>
      </td>
      <td>{value}</td>
    </tr>
  );
};

export default Row;
