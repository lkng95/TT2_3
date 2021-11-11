import React, { useMemo, useState, useEffect } from "react";
import { useTable } from "react-table";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";
import { NavLink as Link } from "react-router-dom";

// const PROJECT_API = "http://localhost:3001/manage";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      user_id: 4,
      name: "RTF",
      budget: 12000,
      description: "Realtime Face Recogniton",
    },
    {
      id: 2,
      user_id: 1,
      name: "SWT",
      budget: 80000,
      description: "Smart Watch Tracker",
    },
    {
      id: 3,
      user_id: 2,
      name: "ULS",
      budget: 11000,
      description: "Upgrade Legacy System",
    },
  ]);

  // useEffect(() => {
  // 	const getProjects = async () => {
  // 		try {
  // 			const res = await PROJECT_API.get('/projects/all')
  //       setProjects(res.data)
  // 		} catch (err) {
  // 			console.log(`Error: ${err.message}`)
  // 		}
  // 	}

  // }, [])

  let navigate = useNavigate();

  // Get data
  const data = useMemo(() => projects, []);

  // Define columns
  const columns = useMemo(
    () => [
      {
        Header: "Project",
        accessor: "description",
        Cell: (e) => <Link to="/projects/1">{e.value}</Link>,
        // Cell: e =><a href={e.value}> {e.value} </a>
      },
      {
        Header: "Budget",
        accessor: "budget",
      },
    ],
    []
  );

  // Create table instance
  const tableInstance = useTable({ columns, data });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div className="container">
      <div className="header">
        <h1>Projects</h1>
        <Button
          color="green"
          text="Add new Project"
          onClick={() => {
            navigate("/add_project");
          }}
        />
      </div>

      <table {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      console.log(cell);
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsPage;
