import { useForm } from "react-hook-form";
import { useEffect } from "react";

const EmployeeForm = ({
  employee = {},
  onSubmit,
  isEditing = false,
  showId = false,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: employee,
  });

  useEffect(() => {
    if (employee && Object.keys(employee).length > 0) {
      reset(employee);
    }
  }, [JSON.stringify(employee)]);

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">
        {isEditing ? "Edit" : "Add"} Employee
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {showId && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Employee ID
            </label>
            <input
              {...register("id")}
              value={employee.id}
              disabled
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 cursor-not-allowed"
            />
          </div>
        )}
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Name"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
        <input
          {...register("email", { required: "Email is required" })}
          placeholder="Email"
          type="email"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <input
          {...register("phone", { required: "Phone is required" })}
          placeholder="Phone"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
        <input
          {...register("department", { required: "Department is required" })}
          placeholder="Department"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.department && (
          <p className="text-red-500 text-sm">{errors.department.message}</p>
        )}
        <input
          {...register("role", { required: "Role is required" })}
          placeholder="Role"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.role && (
          <p className="text-red-500 text-sm">{errors.role.message}</p>
        )}
        <input
          {...register("salary", { required: "Salary is required" })}
          placeholder="Salary"
          type="number"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.salary && (
          <p className="text-red-500 text-sm">{errors.salary.message}</p>
        )}
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Joining Date
        </label>
        <input
          {...register("joiningDate", { required: "Joining Date is required" })}
          type="date"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.joiningDate && (
          <p className="text-red-500 text-sm">{errors.joiningDate.message}</p>
        )}
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
