import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { getEmployees, deleteEmployee } from "../../service/api";
import { Pencil, Trash2, Search } from "lucide-react";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const departmentOptions = [
    ...new Set(employees.map((emp) => emp.department)),
  ];

  const showdata = () => {
    getEmployees().then((employees) => {
      const sorteddata = employees.sort((a, b) => a.name.localeCompare(b.name));
      setEmployees(sorteddata);
    });
  };

  useEffect(() => {
    showdata();
  }, []);

  const deleteemployee = (id, employee) => {
    deleteEmployee(id, employee)
      .then(() => showdata())
      .catch((err) => console.error(err));
    toast("Employee Deleted!", {
      duration: 3000,
      position: "top-right",
      icon: "⛔",
    });
  };

  const filterEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.department.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDepartment =
      selectedDepartment === "" || emp.department === selectedDepartment;

    return matchesSearch && matchesDepartment;
  });

  return (
    <>
      <Toaster />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          👥 Employees List
        </h1>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search by name, email or department"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="p-2 border rounded-lg shadow-sm w-full sm:w-64 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All Departments</option>
            {departmentOptions.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <tr>
                {[
                  "EMP ID",
                  "Name",
                  "Email",
                  "Department",
                  "Joining Date",
                  "Phone",
                  "Role",
                  "Salary",
                  "Actions",
                ].map((head, idx) => (
                  <th key={idx} className="px-6 py-3 font-semibold">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filterEmployees.length === 0 ? (
                <tr>
                  <td
                    colSpan="9"
                    className="text-center py-6 text-gray-500 italic"
                  >
                    No employees found...
                  </td>
                </tr>
              ) : (
                filterEmployees.map((employee) => (
                  <tr
                    key={employee.id}
                    className="hover:bg-gray-50 border-b transition"
                  >
                    <td className="px-6 py-4">{employee.id}</td>
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {employee.name}
                    </td>
                    <td className="px-6 py-4">{employee.email}</td>
                    <td className="px-6 py-4">{employee.department}</td>
                    <td className="px-6 py-4">{employee.joiningDate}</td>
                    <td className="px-6 py-4">{employee.phone}</td>
                    <td className="px-6 py-4">{employee.role}</td>
                    <td className="px-6 py-4">₹{employee.salary}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Link
                          to={`/edit/${employee.id}`}
                          className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg shadow transition"
                        >
                          <Pencil size={16} /> Edit
                        </Link>
                        <button
                          onClick={() => deleteemployee(employee.id, employee)}
                          className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg shadow transition"
                        >
                          <Trash2 size={16} /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
