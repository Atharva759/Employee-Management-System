const BACKENDURL = import.meta.env.VITE_BACKEND_URL;

export const getEmployeeProfile = async(email)=>{
    return fetch (`${BACKENDURL}/api/profile/${email}`).then(res=>res.json());

}