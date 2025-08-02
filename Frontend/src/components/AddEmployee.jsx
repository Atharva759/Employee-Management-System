import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../service/api";
import EmployeeForm from "../components/EmployeeForm";

const AddEmployee = () => {
    const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    role: "",
    salary: "",
    joiningDate: "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEmployee(employee);
      alert("Employee added successfully!");
      navigate("/employees");
    } catch (error) {
      console.error("Add failed:", error);
    }
  };

  return (
    <EmployeeForm
    employee={employee}
    onChange={handleChange}
    onSubmit={handleSubmit}
    isEditing={false}
    />
  )
}

export default AddEmployee
