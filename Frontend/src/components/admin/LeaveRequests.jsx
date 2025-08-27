import { useEffect, useState } from "react";
import { getAllEmployeeLeaves, updateLeaveStatus } from "../../service/api";
import toast from "react-hot-toast";

const LeaveRequests = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [filter, setFilter] = useState("ALL");

  const getLeaveRequests = async () => {
    try {
      const data = await getAllEmployeeLeaves();
      const sorted = [...data].sort(
        (a, b) =>
          new Date(b.createdAt || b.startDate) -
          new Date(a.createdAt || a.startDate)
      );
      setLeaveRequests(sorted);
    } catch (err) {
      console.error("Error fetching leave requests:", err);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await updateLeaveStatus(id, status);

      setLeaveRequests((prev) =>
        prev.map((req) => (req.id === id ? { ...req, status } : req))
      );

      if (status === "APPROVED") {
        toast.success("Leave Approved ✅");
      } else if (status === "REJECTED") {
        toast.error("Leave Rejected ❌");
      }
    } catch (err) {
      console.error("Error updating leave status:", err);
      toast.error("Failed to update status");
    }
  };

  useEffect(() => {
    getLeaveRequests();
    const interval = setInterval(getLeaveRequests, 30000);
    return () => clearInterval(interval);
  }, []);

  const filteredRequests =
    filter === "ALL"
      ? leaveRequests
      : leaveRequests.filter((req) => req.status === filter);

  const getCardBg = (status) => {
    switch (status) {
      case "APPROVED":
        return "bg-green-50 border border-green-200";
      case "PENDING":
        return "bg-yellow-50 border border-yellow-200";
      case "REJECTED":
        return "bg-red-50 border border-red-200";
      default:
        return "bg-white border border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 tracking-tight">
        Employee Leave Requests
      </h1>

      {/* Filters */}
      <div className="flex gap-3 mb-8">
        {["ALL", "PENDING", "APPROVED", "REJECTED"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2.5 rounded-full font-semibold transition cursor-pointer shadow-sm ${
              filter === f
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Requests */}
      <div className="grid gap-6 w-full max-w-4xl">
        {filteredRequests.length === 0 ? (
          <p className="text-gray-500 text-lg text-center">
            No leave requests found.
          </p>
        ) : (
          filteredRequests.map((data) => (
            <div
              key={data.id}
              className={`${getCardBg(
                data.status
              )} shadow-md rounded-2xl p-6 hover:shadow-xl transition-shadow`}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-gray-500">Employee</p>
                  <p className="font-medium">{data.employeeEmail}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Leave Type</p>
                  <p className="font-medium">{data.leaveType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Start Date</p>
                  <p className="font-medium">
                    {new Date(data.startDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">End Date</p>
                  <p className="font-medium">
                    {new Date(data.endDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Reason</p>
                  <p className="font-medium">{data.reason}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      data.status === "APPROVED"
                        ? "bg-green-200 text-green-800"
                        : data.status === "PENDING"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {data.status}
                  </span>
                </div>
              </div>

              {data.status === "PENDING" && (
                <div className="mt-6 flex gap-4">
                  <button
                    onClick={() => handleStatusChange(data.id, "APPROVED")}
                    className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition cursor-pointer shadow"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleStatusChange(data.id, "REJECTED")}
                    className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition cursor-pointer shadow"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LeaveRequests;
