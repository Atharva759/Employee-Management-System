// src/service/api.js
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

/** --------------------- EMPLOYEE APIs --------------------- **/

export const getEmployees = async () => {
  const res = await fetch(`${BACKEND_URL}/api/employees`, { credentials: "include" });
  if (!res.ok) throw new Error("Failed to fetch employees");
  return res.json();
};

export const getEmployeeById = async (id) => {
  const res = await fetch(`${BACKEND_URL}/api/employees/${id}`, { credentials: "include" });
  if (!res.ok) throw new Error("Failed to fetch employee");
  return res.json();
};

export const createEmployee = async (employee) => {
  const res = await fetch(`${BACKEND_URL}/api/employees`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to create employee");
  return res.json();
};

export const updateEmployee = async (id, employee) => {
  const res = await fetch(`${BACKEND_URL}/api/employees/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to update employee");
  return res.json();
};

export const deleteEmployee = async (id) => {
  const res = await fetch(`${BACKEND_URL}/api/employees/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to delete employee");
  return res.json();
};

/** --------------------- LEAVE APIs --------------------- **/

export const applyLeave = async (leaveData) => {
  const res = await fetch(`${BACKEND_URL}/api/leaves/apply`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(leaveData),
  });
  if (!res.ok) throw new Error("Failed to apply leave");
  return res.json();
};

export const getLeavesByEmployee = async () => {
  const res = await fetch(`${BACKEND_URL}/api/leaves/my`, {
    method: "GET",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to fetch leaves");
  return res.json();
};

export const getAllEmployeeLeaves = async () => {
  const res = await fetch(`${BACKEND_URL}/api/leaves/all`, { credentials: "include" });
  if (!res.ok) throw new Error("Failed to fetch all leaves");
  return res.json();
};

export const updateLeaveStatus = async (id, status) => {
  const res = await fetch(`${BACKEND_URL}/api/leaves/${id}/status?status=${status}`, {
    method: "PUT",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to update leave status");
  return res.json();
};

/** --------------------- PROFILE API --------------------- **/

export const getEmployeeProfile = async () => {
  const res = await fetch(`${BACKEND_URL}/api/profile`, {
    method:"GET",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to fetch profile");
  return res.json();
};
