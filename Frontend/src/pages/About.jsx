import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-100 flex flex-col items-center px-6 py-16">
      <div className="max-w-5xl w-full text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-blue-400">EMS</span>
        </h1>
        <p className="text-lg text-gray-300 mb-12">
          The Employee Management System (EMS) is a full-stack web application
          designed to simplify employee and admin operations. It provides tools
          for managing employee records, leave requests, and insightful
          analytics — ensuring smooth organizational workflows.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {[
          "Secure Authentication with JWT + Cookies",
          "Admin & Employee Portals",
          "Employee Profile Management",
          "Leave Application & Tracking",
          "Server Status Monitoring",
          "Analytics Dashboard (Employees, Salary, Roles, Trends)",
          "Responsive & Mobile-Friendly UI",
          "Spring Boot + React Full-Stack Architecture",
          "RESTful APIs with Role-based Access",
        ].map((feature, idx) => (
          <div
            key={idx}
            className="bg-[#1e293b] p-6 rounded-2xl shadow-md flex items-start gap-4 hover:shadow-lg hover:scale-[1.02] transition"
          >
            <CheckCircle className="text-blue-400 mt-1" size={22} />
            <p className="text-gray-200">{feature}</p>
          </div>
        ))}
      </div>

      {/* Tech Stack Section */}
      <div className="max-w-5xl mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Tech Stack</h2>
        <p className="text-gray-300 mb-4">
          Our EMS is built using modern technologies to ensure performance,
          scalability, and reliability.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "React.js",
            "TailwindCSS",
            "Spring Boot",
            "PostgreSQL",
            "JWT Auth",
            "REST API",
          ].map((tech, idx) => (
            <span
              key={idx}
              className="px-5 py-2 bg-blue-700/30 border border-blue-500 rounded-full text-sm text-blue-300 font-medium shadow-sm hover:bg-blue-700/50 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-16 text-gray-400 text-sm text-center">
        <p>
          © {new Date().getFullYear()} Employee Management System. Built with ❤️
          by Atharva.
        </p>
      </div>
    </div>
  );
};

export default About;
