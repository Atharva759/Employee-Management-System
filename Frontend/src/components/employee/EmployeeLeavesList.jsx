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
      const response = await getLeavesByEmployee(email);
      setLeaveData(response);
    } catch (err) {
      console.error("Error fetching leave data:", err);
    }
  };

  useEffect(() => {
    if (email) fetchLeaveData();
  }, [email]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">My Leave Requests</h1>

      {leaveData.length === 0 ? (
        <p className="text-gray-500 text-lg">No leave records found.</p>
      ) : (
        <div className="grid gap-6 w-full max-w-4xl">
          {leaveData.map((data) => (
            <div
              key={data.id}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{data.employeeEmail}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Leave Type</p>
                  <p className="font-medium">{data.leaveType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Start Date</p>
                  <p className="font-medium">{data.startDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">End Date</p>
                  <p className="font-medium">{data.endDate}</p>
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
                        ? "bg-green-100 text-green-700"
                        : data.status === "PENDING"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {data.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Link
        to="/employeeportalhome"
        className="m-2 p-2 bg-gray-200 rounded transition hover:bg-gray-400"
      >
        Back
      </Link>
    </div>
  );
};

export default EmployeeLeavesList;
