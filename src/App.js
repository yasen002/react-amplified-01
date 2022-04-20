import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

function App() {
  const [authState, setAuthState] = useState(false);
  useEffect(() => {
    if (authState === false) {
      // var data = Auth.federatedSignIn({ provider: "Google" });
      getStudentData().catch((e) => console.log(e));
    }

    async function getStudentData() {
      const user = await Auth.currentAuthenticatedUser();
      // const { attributes } = await user;
      // const { email } = await attributes;
      console.log(user);
      setAuthState(true);
    }
  }, [authState]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
