import { useNavigate } from "react-router-dom";
import { createEmployee } from "../../service/api";
import EmployeeForm from "./EmployeeForm";
import toast from "react-hot-toast";

const AddEmployee = () => {
  const navigate = useNavigate();
  const handleAddEmployee = async (employee) => {
    try {
      await createEmployee(employee);
      toast.success("Employee Added Successfully!", {
        duration: 3000,
        position: "top-right",
      });
      navigate("/employees");
    } catch (error) {
      toast.error("Failed to Add Employee");
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
  );
};

export default AddEmployee;
