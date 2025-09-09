import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import ServerStatus from "./ServerStatus";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0f172a] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-bold text-white tracking-wide hover:text-blue-400 transition"
        >
          <img className="w-10 h-10" src="/logo.svg" alt="EMS Logo" />
          EMS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-white text-sm font-medium">
          <NavLink
            to="/adminportal"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "hover:bg-blue-700/70"
              }`
            }
          >
            Admin Portal
          </NavLink>
          <NavLink
            to="/empportal"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "hover:bg-blue-700/70"
              }`
            }
          >
            Employee Portal
          </NavLink>
          <ServerStatus />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-blue-400 transition"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#1e293b] px-6 py-4 flex flex-col gap-4 text-white text-sm">
          <Link
            to="/adminportal"
            className="px-4 py-2 rounded-lg hover:bg-blue-700/70 transition"
            onClick={() => setIsOpen(false)}
          >
            Admin Portal
          </Link>
          <Link
            to="/empportal"
            className="px-4 py-2 rounded-lg hover:bg-blue-700/70 transition"
            onClick={() => setIsOpen(false)}
          >
            Employee Portal
          </Link>
          <ServerStatus />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
