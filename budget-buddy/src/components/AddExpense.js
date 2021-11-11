import { useState } from "react";
import Button from "../components/Button";

function AddExpense() {
  const [newExpenseName, setNewExpenseName] = useState("");
  const [newExpenseDesc, setNewExpenseDesc] = useState("");
  const [newAmt, setNewAmt] = useState("");

  return (
    <div className="container">
      <div className="header">
        <h1>Add new expense:</h1>
        <Button color="green" text="Add" />
      </div>
      <form className="add-form">
        <div className="form-control">
          <label>Name of expense</label>
          <input
            type="text"
            placeholder="Input expense name"
            value={newExpenseName}
            onChange={(e) => setNewExpenseName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Description</label>
          <input
            type="text"
            placeholder="Input new description"
            value={newExpenseDesc}
            onChange={(e) => setNewExpenseDesc(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input
            type="text"
            placeholder="Input new amount"
            value={newAmt}
            onChange={(e) => setNewAmt(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default AddExpense;
