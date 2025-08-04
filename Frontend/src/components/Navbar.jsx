import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#0f172a] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-4 flex justify-between items-center">
        
        <Link to="/" className=" flex justify-center items-center gap-3 text-2xl font-bold text-white tracking-wide">
        <img className="w-15 h-15" src="/logo.svg" />
          Employee Management System
        </Link>

        
        <div className="hidden md:flex gap-8 items-center text-white text-sm font-medium">
          <Link to="/employees" className="hover:text-blue-300 transition">
            Employees
          </Link>
          <Link to="/add" className="hover:text-blue-300 transition">
            Add Employee
          </Link>
          <Link to="/dashboard" className="hover:text-blue-300 transition">
            Dashboard
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
