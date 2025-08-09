import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeProfile } from "../service/employeeprofileapi";

const EmployeeProfile = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();
  const { email } = useParams(); 

  useEffect(() => {
    const userEmail = email || localStorage.getItem("userEmail")?.replace(/"/g, "");

    if (!userEmail) {
      navigate("/login");
      return;
    }

    getEmployeeProfile(userEmail)
      .then((data) => {
        setProfile(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [email, navigate]);

  if (!profile) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <h2>Employee Profile</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Department:</strong> {profile.department}</p>
      <p><strong>Role:</strong> {profile.role}</p>
      <p><strong>Salary:</strong> {profile.salary}</p>
      <p><strong>Joining Date:</strong> {profile.joiningDate}</p>
    </div>
  );
};

export default EmployeeProfile;
