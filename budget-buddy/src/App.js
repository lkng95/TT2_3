import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ViewExpenses from "./components/ViewExpenses";
import AddExpense from "./components/AddExpense";
import AddProject from "./components/AddProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/expense" element={<ViewExpenses />} />
        <Route exact path="/add_project" element={<AddProject />} />
        <Route exact path="/add_expense" element={<AddExpense />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
