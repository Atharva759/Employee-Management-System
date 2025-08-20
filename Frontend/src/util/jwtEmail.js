import { jwtDecode } from "jwt-decode";

export const getEmailFromToken = () => {
    const cookieString = document.cookie;
    const token = cookieString
        .split("; ")
        .find((row) => row.startsWith("jwt="))
        ?.split("=")[1];


    if (!token) return null;
    try {
        const decoded = jwtDecode(token);
        return decoded.email || decoded.sub || null;
    } catch (error) {
    
        return null;
    }
};


export default getEmailFromToken;
