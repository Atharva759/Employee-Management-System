import React from 'react'
import { Link } from 'react-router-dom'

const AdminPortal = () => {
    const actions = [
    { title: "View Employees", link: "/employees", color: "bg-blue-500" },
    { title: "Add Employee", link: "/add", color: "bg-green-500" },
    { title: "Dashboard", link: "/dashboard", color: "bg-purple-500" },
    { title: "Coming Soon", link: "/", color: "bg-yellow-500" },
  ];
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Admin Actions
        </h1>

        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {actions.map((action, idx) => (
            <Link
              key={idx}
              to={action.link}
              className={`${action.color} text-white rounded-2xl shadow-lg p-6 hover:opacity-90 transition duration-300`}
            >
              <div className="text-center">
                <h2 className="text-xl font-semibold">{action.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminPortal
