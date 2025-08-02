
const EmployeeForm = ({employee,onChange,onSubmit,isEditing=false}) => {
  
  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Employee Form</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          name="name"
          value={employee.name}
          onChange={onChange}
          placeholder="Name"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="email"
          value={employee.email}
          onChange={onChange}
          placeholder="Email"
          type="email"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="phone"
          value={employee.phone}
          onChange={onChange}
          placeholder="Phone"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="department"
          value={employee.department}
          onChange={onChange}
          placeholder="Department"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="role"
          value={employee.role}
          onChange={onChange}
          placeholder="Role"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="salary"
          value={employee.salary}
          onChange={onChange}
          placeholder="Salary"
          type="number"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Joining Date
        </label>
        <input
          name="joiningDate"
          value={employee.joiningDate}
          onChange={onChange}
          type="date"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
        >
          {isEditing ? "Update" : "Add"} Employee
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
