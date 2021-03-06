import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProjectsPage from "./pages/ProjectsPage";
import ViewExpenses from "./components/ViewExpenses";
import ProjectInfoPage from "./pages/ProjectInfoPage";
import AddExpense from "./components/AddExpense";
import AddProject from "./components/AddProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/expense" element={<ViewExpenses />} />
        <Route exact path="/project_info" element={<ProjectInfoPage />} />
        <Route exact path="/add_project" element={<AddProject />} />
        <Route exact path="/add_expense" element={<AddExpense />} />
        <Route exact path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
