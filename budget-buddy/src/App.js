import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ViewExpenses from "./components/ViewExpenses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/expense" element={<ViewExpenses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
