import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function AddExpense() {
  const [newExpenseName, setNewExpenseName] = useState("");
  const [newExpenseDesc, setNewExpenseDesc] = useState("");
  const [newAmt, setNewAmt] = useState("");

  let navigate = useNavigate();

  const goBack = () => {
    navigate("/project_info");
  };

  const addExpense = () => {
    console.log("Added expense");
    navigate("/project_info");
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Add new expense:</h1>
        <div>
          <Button color="red" text="Back" onClick={goBack} />
          <Button color="green" text="Add" onClick={addExpense} />
        </div>
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
