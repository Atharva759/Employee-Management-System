import { useState, useEffect } from "react";
import { BACKEND_URL } from "../../service/api";

const ServerStatus = () => {
  const [status, setStatus] = useState("checking");

  const checkserver = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/actuator/health`);
      const data = await res.json();
      setStatus(data.status === "UP" ? "online" : "offline");
    } catch (error) {
      setStatus("offline");
    }
  };

  useEffect(() => {
    checkserver();

    const interval = setInterval(checkserver, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, []);

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
    </div>
  );
};

export default ServerStatus;
