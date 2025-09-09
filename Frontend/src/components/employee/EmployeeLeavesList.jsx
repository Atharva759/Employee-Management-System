import { useState, useEffect } from "react";
import { getLeavesByEmployee } from "../../service/api";
import { Link } from "react-router-dom";
import getEmailFromToken from "../../util/jwtEmail";

const EmployeeLeavesList = () => {
  const [leaveData, setLeaveData] = useState([]);
  const email = getEmailFromToken();

  const fetchLeaveData = async () => {
    if (!email) return;

    try {
      const response = await getLeavesByEmployee();
      setLeaveData(response);
    } catch (err) {
      console.error("Error fetching leave data:", err);
    }
  };

  useEffect(() => {
    if (email) fetchLeaveData();
  }, [email]);

  const statusBg = {
    APPROVED: "bg-green-50 border-green-200",
    PENDING: "bg-yellow-50 border-yellow-200",
    REJECTED: "bg-red-50 border-red-200",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-6 flex flex-col items-center">
      {/* Page Title */}
      <h1 className="text-3xl font-extrabold mb-8 text-gray-800 text-center tracking-tight">
        My Leave Requests
      </h1>

      {/* No Records */}
      {leaveData.length === 0 ? (
        <p className="text-gray-500 text-lg bg-white shadow-md rounded-xl px-6 py-4">
          No leave records found.
        </p>
      ) : (
        <div className="grid gap-6 w-full max-w-5xl">
          {leaveData.map((data) => (
            <div
              key={data.id}
              className={`shadow-lg rounded-xl p-6 hover:shadow-2xl hover:scale-[1.01] transition-all border ${
                statusBg[data.status] || "bg-white border-gray-200"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Email */}
                <div>
                  <p className="text-xs uppercase text-gray-600">Email</p>
                  <p className="font-medium text-gray-800 break-all">
                    {data.employeeEmail}
                  </p>
                </div>

                {/* Leave Type */}
                <div>
                  <p className="text-xs uppercase text-gray-600">Leave Type</p>
                  <p className="font-medium text-gray-800">{data.leaveType}</p>
                </div>

                {/* Status */}
                <div>
                  <p className="text-xs uppercase text-gray-600">Status</p>
                  <span
                    className={`inline-block px-3 py-1 mt-1 rounded-full text-sm font-semibold tracking-wide ${
                      data.status === "APPROVED"
                        ? "bg-green-200 text-green-900"
                        : data.status === "PENDING"
                        ? "bg-yellow-200 text-yellow-900"
                        : "bg-red-200 text-red-900"
                    }`}
                  >
                    {data.status}
                  </span>
                </div>

                {/* Dates */}
                <div>
                  <p className="text-xs uppercase text-gray-600">Start Date</p>
                  <p className="font-medium text-gray-800">{data.startDate}</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-600">End Date</p>
                  <p className="font-medium text-gray-800">{data.endDate}</p>
                </div>

                {/* Reason */}
                <div className="md:col-span-3">
                  <p className="text-xs uppercase text-gray-600">Reason</p>
                  <p className="font-medium text-gray-800">{data.reason}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Back Button */}
      <Link
        to="/employeeportalhome"
        className="mt-10 inline-block px-6 py-3 bg-gray-800 text-white rounded-lg font-medium shadow-md hover:bg-gray-900 hover:shadow-lg transition"
      >
        ⬅ Back to Dashboard
      </Link>
    </div>
  );
};

export default EmployeeLeavesList;
