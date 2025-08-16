import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { applyLeave } from "../../service/leaveapi";

const ApplyLeave = () => {
  const { email } = useParams();
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
    const leaveData = { ...form, employeeEmail: email };
    try {
      const res = await applyLeave(leaveData);
      console.log(leaveData);
      alert(res.message || "Leave applied successfully");
      navigate(`/employeeportalhome`);
    } catch (err) {
      console.error(err);
      alert("Error applying leave");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Apply for Leave
        </h2>

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
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Reason */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Reason</label>
          <textarea
            name="reason"
            value={form.reason}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
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
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select Type</option>
            <option value="SICK">Sick Leave</option>
            <option value="CASUAL">Casual Leave</option>
            <option value="EARNED">Earned Leave</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplyLeave;
