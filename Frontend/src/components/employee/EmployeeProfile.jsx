import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getEmployeeProfile } from "../../service/api";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import getEmailFromToken from "../../util/jwtEmail";


const EmployeeProfile = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("token");
    toast.success("Logged Out!", {
      duration: 3000,
      position: "top-right",
    });
    navigate("/");
  };

  useEffect(() => {
    const email = getEmailFromToken();

    getEmployeeProfile(email)
      .then((data) => setProfile(data))
      .catch((err) => console.error("Error fetching profile:", err));
  }, [navigate]);

  if (!profile) {
    return (
      <p className="text-center text-gray-500 mt-10 animate-pulse">
        Loading profile...
      </p>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl border border-gray-200">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Employee Profile
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Personal and job details overview
          </p>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { label: "Name", value: profile.name },
            { label: "Email", value: profile.email },
            { label: "Department", value: profile.department },
            { label: "Role", value: profile.role },
            { label: "Salary", value: `₹${profile.salary}` },
            { label: "Joining Date", value: profile.joiningDate },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-gray-50 px-5 py-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                {item.label}
              </span>
              <span className="mt-1 text-gray-800 font-medium">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-12 flex justify-center gap-6">
          <Link
            to="/employeeportalhome"
            className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-medium shadow hover:bg-gray-200 hover:shadow-md transition"
          >
            ⬅ Home
          </Link>
          <button
            onClick={handleLogout}
            className="px-6 py-2.5 bg-red-500 text-white rounded-lg font-medium shadow hover:bg-red-600 hover:shadow-lg transition"
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
