import { useState } from "react";
import Button from "../components/Button";

function AppProject() {
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectDesc, setNewProjectDesc] = useState("");
  const [newBudget, setNewBudget] = useState("");

  return (
    <div className="container">
      <div className="header">
        <h1>Add new project:</h1>
        <Button color="green" text="Add" />
      </div>
      <form className="add-form">
        <div className="form-control">
          <label>Name of Project</label>
          <input
            type="text"
            placeholder="Input expense name"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Description</label>
          <input
            type="text"
            placeholder="Input new description"
            value={newProjectDesc}
            onChange={(e) => setNewProjectDesc(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Budget</label>
          <input
            type="text"
            placeholder="Input new budget"
            value={newBudget}
            onChange={(e) => setNewBudget(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default AppProject;
