import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import "./App.css";
import Fetch from "./fetch";

import Jobs from "./Jobs.js";


const getToken = () =>
  jwt.sign(
    {
      exp: (() => Math.floor(Date.now() / 1000) + 60)(),
      iss: "learn-web-dev-camper-key",
    },
    "web-dev-camper-secret"
  );

function App() {
  const [job, setJob] = useState([]);


  useEffect(() => {
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
      .then(res => setJob(res));
  }, []);
  console.log("this console",job.data);

  return (
    <div className="App">
    <Jobs job={console.log(job)}/>
 
    </div>
  );
}

export default App;
