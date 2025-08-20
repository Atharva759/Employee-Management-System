import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getEmployeeProfile } from "../../service/api";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

// Helper to decode JWT from cookies
const getEmailFromToken = () => {
  const token = Cookies.get("token");
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.sub || payload.email || null;
  } catch (err) {
    console.error("Error decoding token", err);
    return null;
  }
};

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
    return <p className="text-center text-gray-500 mt-10">Loading profile...</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Employee Profile
        </h2>

        <div className="space-y-4 text-gray-700">
          <p><span className="font-semibold">Name:</span> {profile.name}</p>
          <p><span className="font-semibold">Email:</span> {profile.email}</p>
          <p><span className="font-semibold">Department:</span> {profile.department}</p>
          <p><span className="font-semibold">Role:</span> {profile.role}</p>
          <p><span className="font-semibold">Salary:</span> ₹{profile.salary}</p>
          <p><span className="font-semibold">Joining Date:</span> {profile.joiningDate}</p>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/employeeportalhome"
            className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            Home
          </Link>
          <button
            onClick={handleLogout}
            className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-300 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
