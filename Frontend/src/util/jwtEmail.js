
import Cookies from "js-cookie";

export const getEmailFromToken = async() => {
  const token =  Cookies.get("token");
  if (!token) return null;

  try {
    const payload = await JSON.parse(atob(token.split(".")[1]));
    return payload.sub || payload.email || null;
  } catch (err) {
    console.error("Error decoding token", err);
    return null;
  }
};


export default getEmailFromToken;
