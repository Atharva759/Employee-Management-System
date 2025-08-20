const BACKENDURL = import.meta.env.VITE_BACKEND_URL;

export const registerEmployee = async(userData)=> {
    const res = await fetch(`${BACKENDURL}/api/employee/auth/register`,{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userData),
        credentials:"include",
    });
    if(!res.ok) throw new Error("Registration Fialed");
    return res.json();
}
export const loginEmployee = async(userData) => {
    const res = await fetch(`${BACKENDURL}/api/employee/auth/login`, {
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userData),
        credentials:"include",
    });
    if(!res.ok) throw new Error("Invalid Credentials");
    return res.json();
}