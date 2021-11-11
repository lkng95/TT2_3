import React, { useMemo, useState, useEffect } from "react";
import { useTable } from "react-table";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";
import { NavLink as Link } from "react-router-dom";
import firebase from "../firebase";

const ProjectsPage = () => {
  const auth = firebase.auth();

  // const [projects, setProjects] = useState([
  //   {
  //     id: 1,
  //     user_id: 4,
  //     name: "RTF",
  //     budget: 12000,
  //     description: "Realtime Face Recogniton",
  //   },
  //   {
  //     id: 2,
  //     user_id: 1,
  //     name: "SWT",
  //     budget: 80000,
  //     description: "Smart Watch Tracker",
  //   },
  //   {
  //     id: 3,
  //     user_id: 2,
  //     name: "ULS",
  //     budget: 11000,
  //     description: "Upgrade Legacy System",
  //   },
  // ]);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const PROJECT_API = axios.create({ baseURL: "http://localhost:3001/manage" });

  useEffect(() => {
    const getProjects = async () => {
      setIsLoading(true);
      try {
        const res = await PROJECT_API.get("/projects/all");
        setProjects(res.data);
        setIsLoading(false);
        console.log(res.data);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };

    getProjects();
  }, []);

  let navigate = useNavigate();

  // Get data
  const data = useMemo(() => projects, [projects]);

  const findProject = (name) => {
    return projects.find((project) => {
      return (project.name = name);
    });
  };

  // Define columns
  const columns = useMemo(
    () => [
      {
        Header: "Project",
        accessor: "description",
        Cell: (e) => (
          <Link to="/project_info" params={findProject(e.value)}>
            {e.value}
          </Link>
        ),
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

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        console.log("Successful logout");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Projects</h1>
        <div>
          <Button
            color="green"
            text="Add new Project"
            onClick={() => {
              navigate("/add_project");
            }}
          />
          <Button color="red" text="Logout" onClick={logout} />
        </div>
      </div>

      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
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
                    <Button color="red" text="X" />
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProjectsPage;
