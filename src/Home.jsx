import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";

export default function Home() {
  const [studentData, setStudentData] = useState(null);
  //if not authenticated, render option to login.
  //if authenticated show option of dashboard.

  useEffect(() => {
    setAuth();
    async function setAuth() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setStudentData(user);
      } catch (error) {
        console.log(error);
      }
    }
  }, [studentData]);

  return (
    <div>
      <Link to="dashboard">Dashboard {JSON.stringify(studentData)}</Link>
    </div>
  );
}
