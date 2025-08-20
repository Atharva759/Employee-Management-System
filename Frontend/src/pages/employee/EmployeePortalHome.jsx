import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { getEmailFromToken } from "../../util/jwtEmail";


const EmployeePortalHome = () => {

  const formatName = (email) => {
    if (!email) return "";
    return email
      .split("@")[0]
      .split(".")
      .join(" ")
      .replace(/\b\w/g, char => char.toUpperCase());
  };

  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    const userEmail = getEmailFromToken();
    setEmail(userEmail);
    setName(formatName(userEmail));
  }, [navigate]);

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/");
  };

  if (!email) {
    return (
      <p className="text-center mt-10 text-gray-500">
        Loading your dashboard...
      </p>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome, <span className="text-blue-600">{name}</span> 👋
        </h1>
        <p className="text-gray-500 mb-8">Your employee portal dashboard</p>

        <div className="flex flex-col gap-4">
          {/* Profile */}
          <Link
            to={`/employeeprofile`}
            className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
          >
            Profile
          </Link>

          {/* Apply Leave */}
          <Link
            to={`/empportal/${email}/leaves/apply`}
            className="w-full px-4 py-3 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 transition"
          >
            Apply Leave
          </Link>

          {/* My Leaves */}
          <Link
            to={`/my`}
            className="w-full px-4 py-3 bg-yellow-600 text-white font-medium rounded-lg shadow hover:bg-yellow-700 transition"
          >
            My Leaves
          </Link>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-full px-4 py-3 bg-red-500 text-white font-medium rounded-lg shadow hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeePortalHome;
