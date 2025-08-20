import { useState,useEffect } from "react"
import { BACKEND_URL } from "../../service/api";
import { FaPowerOff } from "react-icons/fa";

const ServerStatus = () => {
    const [status,setStatus] = useState("Checking");
    const serverchecktime = import.meta.env.VITE_SERVER_CHECK_TIME_HRS;

        const checkserver = async()=>{
            try {
                const res = await fetch(`${BACKEND_URL}/actuator/health`);
                const data = await res.json();
                setStatus(data.status==="UP"?"online":"offline");
            } catch (error) {
                setStatus("offline");
            }
        };

  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-3 w-3 rounded-full ${
          status === "online"
            ? "bg-green-500 animate-pulse" 
            : status === "checking"
            ? "bg-yellow-400 animate-ping" 
            : "bg-red-500 animate-pulse" 
        }`}
      ></span>
      <p className="text-sm font-medium">
        {status === "checking"
          ? "Checking..."
          : status === "online"
          ? " Server Live"
          : " Server Down"}
      </p>
      <button 
      onClick={checkserver}
      disabled={status=="online"}
      className={`p-1 rounded-full transition ${status==="online" ? "text-gray-400 cursor-not-allowed":"text-red-500 hover:text-red-500 cursor-pointer"}`}>
        <FaPowerOff title="Start the server" size={15} />
      </button>
    </div>
  )
}

export default ServerStatus;
