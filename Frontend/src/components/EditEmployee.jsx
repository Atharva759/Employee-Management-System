import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../service/api";
import EmployeeForm from "../components/EmployeeForm";

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
      alert("Employee updated successfully!");
      navigate("/employees");
    } catch (error) {
      console.error("Update failed:", error);
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
