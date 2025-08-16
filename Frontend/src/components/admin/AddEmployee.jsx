import { useNavigate } from "react-router-dom";
import { createEmployee } from "../../service/employeeapi";
import EmployeeForm from "./EmployeeForm";


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
