import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../service/api";
import EmployeeForm from "../components/EmployeeForm";


const AddEmployee = () => {
    const navigate = useNavigate();
    

  const handleAddEmployee = async(employee) => {
    try {
      await createEmployee(employee);
      
      navigate("/employees");
    } catch (error) {
      console.error("Add failed:", error);
    }
  };

  return (
    <>
    
    <EmployeeForm
    onSubmit={handleAddEmployee}
    isEditing={false}
    showId={false}
    />
    </>
  )
}

export default AddEmployee
