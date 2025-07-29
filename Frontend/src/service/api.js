const BACKENDURL = import.meta.env.VITE_BACKEND_URL;

export const getUsers = async () => {
    return fetch(`${BACKENDURL}/api/users`).then(res=>res.json());
}

export const createUser = async (user) => {
    return fetch(`${BACKENDURL}/api/users`, {
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(user),
    });
}

export const updateUser = async(id,user) => {
    return fetch(`${BACKENDURL}/api/users/${id}`, {
        method:'PATCH',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(user),
    });
}

export const deleteUser = async(id,user) => {
    return fetch(`${BACKENDURL}/api/users/${id}`, {
        method:'DELETE',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(user),
    });
}

