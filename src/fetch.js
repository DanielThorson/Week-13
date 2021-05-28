import jwt from "jsonwebtoken";
import { useState, useEffect } from "react";

//

const Fetch = () => {
  const FetchingComponent = () => {
    const [skills, setSkills] = useState();

    useEffect(() => {
      fetch(
        "<https://emsiservices.com/emsi-open-proxy-service/postings/us/taxonomies/skills?q=metal&limit=50" >
          {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${getToken()}`,
            },
          }
      )
        .then((res) => res.json())
        .then((res) => setSkills(res));
    }, []);

    return null;
  };

  const getToken = () =>
    jwt.sign(
      {
        exp: (() => Math.floor(Date.now() / 1000) + 60)(),
        iss: "learn-web-dev-camper-key",
      },
      "web-dev-camper-secret"
    );
};

export default Fetch;
