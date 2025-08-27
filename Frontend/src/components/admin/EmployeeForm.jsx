import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  Building2,
  DollarSign,
  CalendarDays,
  Hash,
} from "lucide-react";

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

  const InputField = ({ icon: Icon, error, ...props }) => (
    <div>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          {...props}
          className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6 flex items-center justify-center gap-2">
        {isEditing ? "✏️ Edit" : "➕ Add"} Employee
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {showId && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Employee ID
            </label>
            <div className="relative">
              <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                {...register("id")}
                value={employee.id}
                disabled
                className="w-full pl-10 p-3 border border-gray-300 rounded bg-gray-100 cursor-not-allowed"
              />
            </div>
          </div>
        )}

        <InputField
          icon={User}
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
          error={errors.name}
        />

        <InputField
          icon={Mail}
          placeholder="Email"
          type="email"
          {...register("email", { required: "Email is required" })}
          error={errors.email}
        />

        <InputField
          icon={Phone}
          placeholder="Phone"
          {...register("phone", { required: "Phone is required" })}
          error={errors.phone}
        />

        <InputField
          icon={Building2}
          placeholder="Department"
          {...register("department", { required: "Department is required" })}
          error={errors.department}
        />

        <InputField
          icon={Briefcase}
          placeholder="Role"
          {...register("role", { required: "Role is required" })}
          error={errors.role}
        />

        <InputField
          icon={DollarSign}
          placeholder="Salary"
          type="number"
          {...register("salary", { required: "Salary is required" })}
          error={errors.salary}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Joining Date
          </label>
          <div className="relative">
            <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              {...register("joiningDate", { required: "Joining Date is required" })}
              type="date"
              className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {errors.joiningDate && (
            <p className="text-red-500 text-sm">{errors.joiningDate.message}</p>
          )}
        </div>

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
