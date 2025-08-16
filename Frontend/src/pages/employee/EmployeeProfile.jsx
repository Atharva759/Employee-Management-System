import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getEmployeeProfile } from "../../service/employeeprofileapi";
import Loader from "../../components/common/Loader";

const EmployeeProfile = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();
  const email = sessionStorage.getItem("userEmail")?.replace(/"/g, "");

  useEffect(() => {
    if (!email) {
      navigate("/login");
      return;
    }

    getEmployeeProfile(email)
      .then((data) => setProfile(data))
      .catch((err) => console.error(err));
  }, [email, navigate]);

  if (!profile) return <Loader text="Loading profile..." />;

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Employee Profile</h2>
      <div className="space-y-2">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Department:</strong> {profile.department}</p>
        <p><strong>Role:</strong> {profile.role}</p>
        <p><strong>Salary:</strong> ₹{profile.salary}</p>
        <p><strong>Joining Date:</strong> {profile.joiningDate}</p>
      </div>
    </div>
  );
};

export default EmployeeProfile;
