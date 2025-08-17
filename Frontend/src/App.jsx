import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EmployeeList from "./components/admin/EmployeeList";
import AddEmployee from "./components/admin/AddEmployee";
import EditEmployee from "./components/admin/EditEmployee";
import Dashboard from "./pages/admin/Dashboard";
import AuthPage from "./pages/auth/AuthPage";
import EmployeePortal from "./pages/employee/EmployeePortal";
import AdminPortal from "./pages/admin/AdminPortal";
import EmployeePortalHome from "./pages/employee/EmployeePortalHome";
import EmployeeProfile from "./components/employee/EmployeeProfile";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import ApplyLeave from "./components/employee/ApplyLeave";
import LeaveRequests from "./components/admin/LeaveRequests";
import EmployeeLeavesList from "./components/employee/EmployeeLeavesList";
import {Toaster} from "react-hot-toast";

function App() {
  return (
    <>
    <Toaster/>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="edit/:id" element={<EditEmployee />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/empportal" element={<EmployeePortal />} />
        <Route path="/adminportal" element={<AdminPortal />} />
        <Route path="/employeeportalhome" element={<EmployeePortalHome />} />
        <Route path="/employeeprofile/:email" element={<EmployeeProfile />} />
        <Route path="/empportal/:email/leave/apply" element={<ApplyLeave />} />
        <Route path="/employeeleaves/:email" element={<EmployeeLeavesList />} />
        <Route path="/leaverequests" element={<LeaveRequests />} />
        <Route path="*" element={<div className="text-center mt-10 text-red-500">Page Not Found</div>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
