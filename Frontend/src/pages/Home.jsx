import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-10 text-gray-800">
        Employee Management System
      </h1>

      <div className="flex gap-6">
        <Link
          to="/employees"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow cursor-pointer"
        >
          List of Employees
        </Link>

        <Link
          to="/add"
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow cursor-pointer"
        >
          Add New Employee
        </Link>
      </div>
    </div>
  );
};

export default Home;
