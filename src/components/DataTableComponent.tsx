import React from "react"
import DataTable from "react-data-table-component"

type TableProps = {
    columns: any;
    data: any;
}

const customStyles = {
  table: {
    style: {
      width: "100%",
      padding: "4em"
    },
  },
  header: {
    style: {
      display: "none",
    },
  },
  headRow: {
    style: {
      background: "#f0f3f6",
    },
  },
  headCells: {
    style: {
      background: "#f0f3f6",
      fontSize: "16px",
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
  cells: {
    style: {
      fontSize: "15px",
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
  pagination: {
    style: {
      fontSize: "15px",
      borderTop: "none",
      paddingRight: "4em",
      paddingLeft: "4em"
    },
  },
}

const DataTableComponent = (props : TableProps) => {
  return (
    <DataTable
      columns={props.columns}
      data={props.data}
      selectableRowsNoSelectAll={true}
      customStyles={customStyles}
      pagination={true}
      paginationPerPage={10}
      selectableRows={false}
    />
  )
}

export default DataTableComponent;
