import React, { useEffect, useState } from "react";
// import { DataStore } from "@aws-amplify/datastore";
// import { Student } from "../src/models";
// import { Auth } from "aws-amplify";

export default function Dashboard() {
  const [studentData, setStudentData] = useState(null);
  //if not authenticated, direct to home page.
  // if authenticated, show student data.
  useEffect(() => {
    getStudentData().catch((e) => console.log(e));
    async function getStudentData() {
      await setTimeout(() => {
        setStudentData(true);
      }, 5000);
    }
  }, []);

  return (
    <div>
      {studentData === null ? <p>Loading...</p> : <p>data has been loaded</p>}
    </div>
  );
}
