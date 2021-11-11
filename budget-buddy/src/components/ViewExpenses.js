import { useState } from "react";
import Button from "../components/Button";
function ViewExpenses({ expenseData }) {
  const testData = {
    id: "1",
    name: "Server Maintenance",
    description:
      "Server maintenance and upgrading work to incorporate BC plans",
    amt: "30000",
    created_at: "2021-11-04T16:00:00.000Z",
    created_by: "Jacky",
    updated_at: "2021-11-06T16:00:00.000Z",
    updated_by: "Jacky",
  };

  const [allowEditing, setAllowEditing] = useState(false);

  const [expenseID, setExpenseID] = useState(testData.id);
  const [expenseName, setExpenseName] = useState(testData.name);
  const [description, setDescription] = useState(testData.description);
  const [amt, setAmt] = useState(testData.amt);

  const toggleEditMode = () => {
    setAllowEditing(!allowEditing);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Expense #{expenseID}</h1>
        <Button color="green" text="Edit" onClick={toggleEditMode} />
      </div>

      <form className="add-form">
        <div className="form-control">
          <label>Name of Expense</label>
          <input
            type="text"
            placeholder="Input expense name"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            disabled={!allowEditing}
          />
        </div>
        <div className="form-control">
          <label>Description</label>
          <input
            type="text"
            placeholder="Input description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={!allowEditing}
          />
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input
            type="text"
            placeholder="Input description"
            value={"$" + amt}
            onChange={(e) => setAmt(e.target.value)}
            disabled={!allowEditing}
          />
        </div>
      </form>
    </div>
  );
}

export default ViewExpenses;
