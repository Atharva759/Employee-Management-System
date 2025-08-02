const BACKENDURL = import.meta.env.VITE_BACKEND_URL;

export const getEmployees = async () => {
    return fetch(`${BACKENDURL}/api/employees`).then(res=>res.json());
}

export const getEmployeeById = async (id) => {
  const response = await fetch(`${BACKENDURL}/api/employees/${id}`);
  return await response.json();
};

export const createEmployee = async (employee) => {
    return fetch(`${BACKENDURL}/api/employees`, {
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(employee),
    });
}

export const updateEmployee = async(id,employee) => {
    return fetch(`${BACKENDURL}/api/employees/${id}`, {
        method:'PATCH',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(employee),
    });
}

export const deleteEmployee = async(id,employee) => {
    return fetch(`${BACKENDURL}/api/employees/${id}`, {
        method:'DELETE',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(employee),
    });
}

