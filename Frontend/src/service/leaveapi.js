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
  const response = await fetch(`${BACKEND_URL}/api/leaves/${email}`,{
    method:"GET",
    headers:{"Content-Type":"application/json"},
    credentials:"include",
  });
  return response.json();
};

export const getAllEmployeeLeaves = async()=>{
  const response = await fetch(`${BACKEND_URL}/api/leaves/all`);
  return response.json();
}
export const updateLeaveStatus = async(id,status)=>{
  const response = await fetch(`${BACKEND_URL}/api/leaves/${id}/status?status=${status}`,{
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    credentials:"include"
  });
  return response.json();
}
