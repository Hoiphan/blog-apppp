import React from "react";
import { useNavigate } from "react-router-dom";

function Identify({ SetisStudent, SetisAdmin, SetisTeacher }) {
  let navigate = useNavigate();

  const Student = () => {
    localStorage.setItem("Student", true);
    SetisStudent(true);
    navigate("/login");
  };

  const Teacher = () => {
    localStorage.setItem("Teacher", true);
    SetisTeacher(true);
    navigate("/login");
  };

  const Admin = () => {
    localStorage.setItem("Admin", true);
    SetisAdmin(true);
    navigate("/login");
  };

  return (
    <div>
      <h1>Choose you indentify</h1>
      <button onClick={Student}>Student</button>
      <button onClick={Teacher}>Teacher</button>
      <button onClick={Admin}>Admin</button>
    </div>
  );
}

export default Identify;
