import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../../service/employeeapi";
import EmployeeForm from "./EmployeeForm";
import toast from "react-hot-toast";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);

  useEffect(() => {
  const fetchEmployee = async () => {
    try {
      const data = await getEmployeeById(id);
      setEmployee(prev => {
        if (JSON.stringify(prev) !== JSON.stringify(data)) {
          return data;
        }
        return prev;
      });

    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  fetchEmployee();
}, [id]);


  const handleUpdate = async (data) => {
    try {
      await updateEmployee(id, data);
      toast("Employee Edited!",{
        position:"top-right",
        duration:3000,
        icon:'ℹ️',
      })
      navigate("/employees");
    } catch (error) {
      toast.error("Something went wrong!",{
        duration:3000,
        position:"top-right",
      });
    }
  };

  return employee ? (
    <EmployeeForm
      employee={employee}
      onSubmit={handleUpdate}
      isEditing={true}
      showId={true}
    />
  ) : (
    <p className="text-center mt-10 text-gray-600">Loading employee data . . .</p>
  );
};

export default EditEmployee;
