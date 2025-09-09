import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { applyLeave } from "../../service/api";
import toast from "react-hot-toast";
import getEmailFromToken from "../../util/jwtEmail";

const ApplyLeave = () => {
  const email = getEmailFromToken();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    startDate: "",
    endDate: "",
    reason: "",
    leaveType: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const leaveData = { ...form };

    try {
      await applyLeave(leaveData);
      toast.success("Leave Applied Successfully!", {
        duration: 3000,
        position: "top-right",
      });
      navigate("/employeeportalhome");
    } catch (err) {
      toast.error("Something went wrong!", {
        duration: 3000,
        position: "top-right",
      });
    }
  };

  useEffect(() => {}, [email]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-lg border border-gray-200"
      >
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Apply for Leave
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Fill in the form below to submit your leave request
          </p>
        </div>

        <div className="space-y-6">
          {/* Start Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* End Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              End Date
            </label>
            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Reason */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Reason
            </label>
            <textarea
              name="reason"
              value={form.reason}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Describe your reason..."
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none transition"
            ></textarea>
          </div>

          {/* Leave Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Leave Type
            </label>
            <select
              name="leaveType"
              value={form.leaveType}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            >
              <option value="">Select Type</option>
              <option value="SICK">Sick Leave</option>
              <option value="CASUAL">Casual Leave</option>
              <option value="EARNED">Earned Leave</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-10">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-transform transform hover:scale-[1.02] cursor-pointer"
          >
            ✅ Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyLeave;
