import { useEffect, useState } from "react";
import { getAllEmployeeLeaves ,updateLeaveStatus} from "../../service/leaveapi";
import toast from "react-hot-toast";

const LeaveRequests = () => {
  const [leaverequests, setLeaveRequests] = useState([]);

  const getLeaveRequests = async () => {
    const data = await getAllEmployeeLeaves();
    setLeaveRequests(data);
  };

  const handleStatusChange = async(id,status)=>{
    await updateLeaveStatus(id,status);
    
     setLeaveRequests(prev =>
       prev.map(req => req.id === id ? { ...req, status } : req)
    );

    if(status==="APPROVED"){
      toast("Leave Approved ✅",{
        duration:3000,
        position:"top-right",
      });
    }else if(status==="REJECTED"){
      toast("Leave Rejected ❌",{
        duration:3000,
        position:"top-right",
      });
    }
  }

  useEffect(() => {
    getLeaveRequests();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Employee Leave Requests
      </h1>

      

      <div className="grid gap-6 w-full max-w-4xl">
        {leaverequests.map((data, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
            {
                data.status === "PENDING" && (
                    <div className="mt-4 flex gap-3">
                <button
                  onClick={() => handleStatusChange(data.id, "APPROVED")}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition cursor-pointer"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleStatusChange(data.id, "REJECTED")}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition cursor-pointer"
                >
                  Reject
                </button>
              </div>
                )
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaveRequests;
