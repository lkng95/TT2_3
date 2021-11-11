import React from "react";
import "../css/Project.css";
import { useTable } from "react-table";
import axios from "axios";

function ProjectInfoPage({ id }) {
  const GET_API_PROJ = "http://localhost:3001/manage/projects/";
  const GET_API_EXPENSES = "http://localhost:3001/manage/";

  const [project, setProject] = React.useState(null);
  const [expenses, setExpenses] = React.useState(null);

  var projectName = "SWT";
  var projectID = "2";
  var userID = "1";
  var projectDesc = "Smart Watch Tracker";
  var budget = "80000";

  React.useEffect(() => {
    axios.get(`${GET_API_PROJ}/2`).then((response) => {
      setProject(response.data.project);
    });
    axios.get(`${GET_API_EXPENSES}/2/view-expenses`).then((response) => {
      setExpenses(response.data.expenses);
    });
  }, []);

  const data = React.useMemo(
    () => [
      {
        name: "Consultant",
        desc: "Consultancy services for integration work",
        amount: "10000",
      },
      {
        name: "Consultant",
        desc: "Consultancy services for integration work",
        amount: "10000",
      },
      {
        name: "Consultant",
        desc: "Consultancy services for integration work",
        amount: "10000",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Description",
        accessor: "desc",
      },
      {
        Header: "Amount",
        accessor: "amount",
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
        <p>Project #{projectID}</p>
        <p>Name: {projectName}</p>
        <p>Description: {projectDesc}</p>
        <p className="project__budget">Project Budget: ${budget}</p>
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

export default ProjectInfoPage;
