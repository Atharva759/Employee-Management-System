import React from 'react'
import { Link } from 'react-router-dom'

const AdminPortal = () => {
  return (
    <div className="flex justify-center items-center">
      This is Admin portal
      <br />
      <Link to="/employees" className=" transition p-3 bg-blue-700 rounded-md">
            Employees
          </Link>
          <Link to="/add" className=" transition p-3 bg-blue-700 rounded-md">
            Add Employee
          </Link>
          <Link to="/dashboard" className="transition p-3 bg-blue-700 rounded-md">
            Dashboard
          </Link>
    </div>
  )
}

export default AdminPortal
