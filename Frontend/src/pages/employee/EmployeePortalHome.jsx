import { useParams, Link } from "react-router-dom";

const EmployeePortalHome = () => {
  const { email } = useParams();
  const gemail = sessionStorage.getItem("userEmail");
  const name = gemail?.split("@")[0].split(".").join(" ");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md text-center">
        {/* Welcome Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome, <span className="text-blue-600 capitalize">{name}</span> 👋
        </h1>
        <p className="text-gray-500 mb-8">Your employee portal dashboard</p>

        
        <div className="flex flex-col gap-4">
          <Link to={`/employeeprofile/${email || sessionStorage.getItem("userEmail")?.replace(/"/g, "")}`}
          className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">
  Profile
</Link>

          <Link
            to={`/empportal/${email || sessionStorage.getItem("userEmail")}/leave/apply`}
            className="w-full px-4 py-3 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 transition"
          >
            Apply Leave
          </Link>

          <Link to={`/employeeleaves/${email || sessionStorage.getItem("userEmail")?.replace(/"/g, "")}`}
          className="w-full px-4 py-3 bg-yellow-600 text-white font-medium rounded-lg shadow hover:bg-yellow-700 transition">
        My Leaves
      </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeePortalHome;
