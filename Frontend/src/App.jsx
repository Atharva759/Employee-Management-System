import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="edit/:id" element={<EditEmployee />} />
        <Route path="*" element={<div className="text-center mt-10 text-red-500">Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
