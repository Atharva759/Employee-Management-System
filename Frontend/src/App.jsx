import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";

// Admin Components (optional for now)
import Dashboard from "./pages/admin/Dashboard";
import EmployeeList from "./components/admin/EmployeeList";
import AddEmployee from "./components/admin/AddEmployee";
import EditEmployee from "./components/admin/EditEmployee";
import AdminPortal from "./pages/admin/AdminPortal";
import LeaveRequests from "./components/admin/LeaveRequests";

// Employee Components
import EmployeePortal from "./pages/employee/EmployeePortal";
import EmployeePortalHome from "./pages/employee/EmployeePortalHome";
import EmployeeProfile from "./components/employee/EmployeeProfile";
import ApplyLeave from "./components/employee/ApplyLeave";
import EmployeeLeavesList from "./components/employee/EmployeeLeavesList";

// Auth / Public
import Home from "./pages/Home";
import AuthPage from "./pages/auth/AuthPage";

// Common
import Navbar from "./components/common/Navbar";
import About from "./pages/About";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<AuthPage />} />
          <Route path="/about" element={<About/>}/>

          {/* Admin Routes  */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
          <Route path="/adminportal" element={<AdminPortal />} />
          <Route path="/leaverequests" element={<LeaveRequests />} />

          {/* Employee Routes */}
          <Route path="/empportal" element={<EmployeePortal />} />
          <Route path="/employeeportalhome" element={<EmployeePortalHome />} />
          <Route path="/employeeprofile" element={<EmployeeProfile />} />
          <Route path="/empportal/leave/apply" element={<ApplyLeave />} />
          <Route path="/myleaves" element={<EmployeeLeavesList />} />

          {/* Fallback */}
          <Route
            path="*"
            element={
              <div className="text-center mt-10 text-red-500">
                Page Not Found
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
