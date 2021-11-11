import React from "react";
import "../css/Project.css";
import { useTable } from "react-table";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";

function ProjectInfoPage({ id }) {
  const GET_API_PROJ = "http://localhost:3001/manage/projects/";
  const GET_API_EXPENSES = "http://localhost:3001/manage/";

  let navigate = useNavigate();

  const [post, setPost] = React.useState(null);
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

  const goBack = () => {
    navigate("/projects");
  };

  const addNewExpense = () => {
    navigate("/add_expense");
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Project #{id}</h1>
        <div>
          <Button color="red" text="Back" onClick={goBack} />
          <Button
            color="green"
            text="Add new expense"
            onClick={addNewExpense}
          />
        </div>
      </div>
      {/* Project ID, Name, Description, Budget */}
      <div className="project__info">
        <p>Name: {name}</p>
        <p>Description: {description}</p>
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
    </div>
  );
}

export default ProjectInfoPage;
