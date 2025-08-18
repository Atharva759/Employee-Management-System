import { useState,useEffect } from "react"
import { BACKEND_URL } from "../../service/leaveapi";

const ServerStatus = () => {
    const [status,setStatus] = useState("Checking");

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
        const serverchecktime = 30000;
        const interval = setInterval(checkserver,serverchecktime);
        return () => clearInterval(interval);
    },[])

  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-3 w-3 rounded-full ${
          status === "online" ? "bg-green-500" : "bg-red-500"
        }`}
      ></span>
      <p className="text-sm font-medium">
        {status === "checking" ? "Checking..." : status === "online" ? "Server Live" : "Server Down"}
      </p>
    </div>
  )
}

export default ServerStatus;
