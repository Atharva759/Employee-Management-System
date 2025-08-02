import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../service/api";
import EmployeeForm from "../components/EmployeeForm";

const EditEmployee = () => {
  const { id } = useParams();
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

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await getEmployeeById(id);
        setEmployee(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEmployee(id, employee);
      alert("Employee updated successfully!");
      navigate("/employees");
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <EmployeeForm
      employee={employee}
      onChange={handleChange}
      onSubmit={handleSubmit}
      isEditing={true}
    />
  );
};

export default EditEmployee;
