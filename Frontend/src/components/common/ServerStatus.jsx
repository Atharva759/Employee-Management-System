import { useState,useEffect } from "react"
import { BACKEND_URL } from "../../service/leaveapi";

const ServerStatus = () => {
    const [status,setStatus] = useState("Checking");
    const serverchecktime = import.meta.env.VITE_SERVER_CHECK_TIME_HRS;

    useEffect(()=>{
        const checkserver = async()=>{
            try {
                const res = await fetch(`${BACKEND_URL}/actuator/health`);
                const data = await res.json();
                setStatus(data.status==="UP"?"online":"offline");
            } catch (error) {
                setStatus("offline");
            }
        };
        checkserver();
        const interval = setInterval(checkserver,serverchecktime*60*60*1000);
        return () => clearInterval(interval);
    },[])

  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-3 w-3 rounded-full ${
          status === "online"
            ? "bg-green-500 animate-pulse" // green pulse when online
            : status === "checking"
            ? "bg-yellow-400 animate-ping" // yellow ping while checking
            : "bg-red-500 animate-pulse" // red pulse when offline
        }`}
      ></span>
      <p className="text-sm font-medium">
        {status === "checking"
          ? "Checking..."
          : status === "online"
          ? " Server Live"
          : " Server Down"}
      </p>
    </div>
  )
}

export default ServerStatus;
