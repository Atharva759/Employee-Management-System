import { Link } from "react-router-dom";
import { Users, UserPlus, BarChart3, ClipboardList } from "lucide-react";

const AdminPortal = () => {
  const actions = [
    {
      title: "View Employees",
      link: "/employees",
      color: "bg-gradient-to-r from-blue-500 to-blue-700",
      icon: Users,
    },
    {
      title: "Add Employee",
      link: "/add",
      color: "bg-gradient-to-r from-green-500 to-green-700",
      icon: UserPlus,
    },
    {
      title: "Dashboard",
      link: "/dashboard",
      color: "bg-gradient-to-r from-purple-500 to-purple-700",
      icon: BarChart3,
    },
    {
      title: "Leave Requests",
      link: "/leaverequests",
      color: "bg-gradient-to-r from-yellow-500 to-orange-500",
      icon: ClipboardList,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          ⚙️ Admin Actions
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {actions.map((action, idx) => {
            const Icon = action.icon;
            return (
              <Link
                key={idx}
                to={action.link}
                className={`${action.color} text-white rounded-2xl shadow-xl p-6 hover:scale-105 hover:shadow-2xl transform transition duration-300`}
              >
                <div className="flex flex-col items-center justify-center gap-3">
                  {/* Circle background for icon */}
                  <div className="bg-white/30 p-3 rounded-full">
                    <Icon size={32} strokeWidth={2.5} className="text-white" />
                  </div>
                  <h2 className="text-lg font-semibold">{action.title}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
