import React, { useEffect, useState } from 'react';
import { getEmployees } from '../service/employeeapi';
import {
  PieChart, Pie, Cell, Tooltip, Legend,
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  ResponsiveContainer
} from 'recharts';

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#00c49f", "#d0ed57"];

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (error) {
        console.error("Error Fetching");
      }
    };
    fetch();
  }, []);

  const totalEmployees = employees.length;

  const departmentCount = employees.reduce((acc, emp) => {
    acc[emp.department] = (acc[emp.department] || 0) + 1;
    return acc;
  }, {});
  const roleCount = employees.reduce((acc, emp) => {
    acc[emp.role] = (acc[emp.role] || 0) + 1;
    return acc;
  }, {});
  const avgSalary = employees.reduce((sum, emp) =>
    sum + Number(emp.salary), 0) / (employees.length || 1);

  const recentJoins = employees.filter((emp) => {
    const date = new Date(emp.joiningDate);
    const now = new Date();
    return (now - date) / (1000 * 60 * 60 * 24) <= 30;
  });

  const trendData = employees.reduce((acc, emp) => {
    const month = new Date(emp.joiningDate).toLocaleString("default", {
      month: "short",
      year: "numeric",
    });
    const found = acc.find((e) => e.month === month);
    if (found) found.count++;
    else acc.push({ month, count: 1 });
    return acc;
  }, []);

  const departmentPieData = Object.entries(departmentCount).map(([key, val]) => ({ name: key, value: val }));
  const rolePieData = Object.entries(roleCount).map(([key, val]) => ({ name: key, value: val }));

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📊 Employee Analytics Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h2 className="text-lg font-semibold text-gray-600">Total Employees</h2>
          <p className="text-3xl font-bold text-indigo-600">{totalEmployees}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h2 className="text-lg font-semibold text-gray-600">Average Salary</h2>
          <p className="text-3xl font-bold text-green-600">₹{avgSalary.toFixed(2)}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md text-center col-span-2">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">Recent Joins (Last 30 Days)</h2>
          <ul className="text-sm text-gray-700 list-disc list-inside h-24 overflow-y-auto">
            {recentJoins.length > 0 ? (
              recentJoins.map((e) => (
                <li key={e.id}>{e.name} – {new Date(e.joiningDate).toLocaleDateString()}</li>
              ))
            ) : (
              <p className="text-gray-400">No recent joins</p>
            )}
          </ul>
        </div>
      </div>

      {/* Pie Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-bold text-center mb-4">Employees by Department</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={departmentPieData} dataKey="value" nameKey="name" outerRadius={80} label>
                {departmentPieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-bold text-center mb-4">Employees by Role</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={rolePieData} dataKey="value" nameKey="name" outerRadius={80} label>
                {rolePieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Line Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
        <h2 className="text-lg font-bold mb-4">Joining Trend Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#ff7300" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
