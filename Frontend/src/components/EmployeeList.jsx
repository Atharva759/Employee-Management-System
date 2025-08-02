import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getEmployees, deleteEmployee } from "../service/api";

const EmployeeList = () => {

  const [employees, setEmployees] = useState([]);

  const showdata = () =>{
    getEmployees().then(employees => {
      const sorteddata = employees.sort((a,b)=> a.name.localeCompare(b.name));
      setEmployees(sorteddata);
    });
  }

  useEffect(() => {
    showdata();
  }, []);

  const deleteemployee = (id,employee) =>{
    deleteEmployee(id,employee)
      .then(()=>showdata())
      .catch((err)=> console.error(err));
  };


  return (
    <>
      <div className="grid m-10 gap-5 justify-center items-center">
        <h1 className="font-medium text-center text-xl ">
          Employees List
        </h1>
        
        <div className="flex justify-center items-center min-h-screen ">
          <table className="table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-700 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Sr No</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Department</th>
                <th className="px-6 py-3 text-left">Joining Date</th>
                <th className="px-6 py-3 text-left">Phone</th>
                <th className="px-6 py-3 text-left">Role</th>
                <th className="px-6 py-3 text-left">Salary</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
            
              {  employees.length===0 ? (<tr><td colSpan="9" className="text-center">Loading...</td></tr>) :  (

                employees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-gray-100 border-t">
                  <td className="px-6 py-4">{employee.id}</td>
                  <td className="px-6 py-4">{employee.name}</td>
                  <td className="px-6 py-4">{employee.email}</td>
                  <td className="px-6 py-4">{employee.department}</td>
                  <td className="px-6 py-4">{employee.joiningDate}</td>
                  <td className="px-6 py-4">{employee.phone}</td>
                  <td className="px-6 py-4">{employee.role}</td>
                  <td className="px-6 py-4">{employee.salary}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <Link
                      to={`/edit/${employee.id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
                        >
                        Edit
                      </Link>
                      <button
                        onClick={()=>deleteemployee(employee.id,employee)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded cursor-pointer"
                        >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                      )
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
