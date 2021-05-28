import jwt from "jsonwebtoken";
import { useState, useEffect } from "react";
import "./App.css";
// import Fetch from "./fetch.js";

const getToken = () =>
  jwt.sign(
    {
      exp: (() => Math.floor(Date.now() / 1000) + 60)(),
      iss: "learn-web-dev-camper-key",
    },
    "web-dev-camper-secret"
  );

function App() {
  const [skills, setSkills] = useState();

  const fetchingFunction = () =>
    fetch(
      "https://emsiservices.com/emsi-open-proxy-service/postings/us/taxonomies/title?q=python&limit=50",
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${getToken()}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => console.log("everytime I fetch", res));

  const data = useEffect(() => {
    fetch(
      "https://emsiservices.com/emsi-open-proxy-service/postings/us/taxonomies/title?q=python&limit=50",
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${getToken()}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => console.log("UseEffect!", res));
  });
  
  return (
    <div>
      <header>
        <button onClick={fetchingFunction}>fetch</button>
        <p></p>
      </header>
    </div>
  );
}

export default App;
