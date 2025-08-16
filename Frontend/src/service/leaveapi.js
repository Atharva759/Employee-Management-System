const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export const applyLeave = async (leaveData) => {
  const response = await fetch(`${BACKEND_URL}/api/leave/apply`, {
    method: "POST",
    headers: { "Content-Type": "application/json"
     },
    body: JSON.stringify(leaveData),
  });
  return response.json();
};

export const getLeavesByEmployee = async (email) => {
  const response = await fetch(`${BACKEND_URL}/leaves/employee/${email}`);
  return response.json();
};
