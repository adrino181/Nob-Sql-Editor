import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Table = (props) => {
  let columns = props.data.columns;
  let rows = props.data.values.map((item, key) => {
    return [...columns].reduce((prev, current, index) => {
      return {...prev, [current.toString()]: item[index], id: `${key}${index}`}
    }, {});
  })
  let renderColumns = columns.map(item => ({
          field: item,
          headerName: item,
  }))

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={renderColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Table;
