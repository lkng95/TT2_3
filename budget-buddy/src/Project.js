import React from "react";
import "./Project.css";
import { useTable } from "react-table";

function Project({ id, uid, name, budget, description }) {
  const data = React.useMemo(
    () => [
      {
        col1: "Expense #1",
        col2: "$50",
      },
      {
        col1: "Expense #2",
        col2: "$25",
      },
      {
        col1: "Expense #3",
        col2: "$10",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Expense",
        accessor: "col1",
      },
      {
        Header: "Cost",
        accessor: "col2",
      },
      {
        Header: "Action",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="project">
      {/* Project ID, Name, Description, Budget */}
      <div className="project__info">
        <p>Project #{id}</p>
        <p>{name}</p>
        <p>{description}</p>
        <p className="project__budget">
          <small>Project Budget: </small>
          <strong>{budget}</strong>
        </p>
        <p>Total Expenses used so far: </p>
        <p>Remaining: </p>
      </div>

      <div>
        <h3>List of Expenses</h3>
        {/* Hardcoded Table for temporary testing */}
        <table
          className="expense__table"
          {...getTableProps()}
          style={{ border: "solid 1px blue" }}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      borderBottom: "solid 3px blue",
                      background: "aliceblue",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: "10px",
                          border: "solid 1px gray",
                          background: "papayawhip",
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Add expenses */}
      <div>
        <h4>Add Expense</h4>
        <p>Name</p>
        <input type="text" />
        <p>Cost</p>
        <input type="text" />
      </div>
      <button className="expense__add" type="submit">
        Add
      </button>
    </div>
  );
}

export default Project;
