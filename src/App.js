import jwt from "jsonwebtoken";
import { useState, useEffect } from "react";
import "./App.css";
import Fetch from "./fetch.js";
import Jobs from "./Jobs.js";
import Job from "./Job.js";

const getToken = () =>
  jwt.sign(
    {
      exp: (() => Math.floor(Date.now() / 1000) + 60)(),
      iss: "learn-web-dev-camper-key",
    },
    "web-dev-camper-secret"
  );

function App() {

  
  return (
    <div className="App">
    <Job />
    </div>
  );
}

export default App;
