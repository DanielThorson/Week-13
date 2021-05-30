// import jwt from "jsonwebtoken";
// import { useEffect } from "react";

// const Fetch = () => {
//   // const [skills, setSkills] = useState();
//   // const [data, setData] = useState();
//   const getToken = () =>
//     jwt.sign(
//       {
//         exp: (() => Math.floor(Date.now() / 1000) + 60)(),
//         iss: "learn-web-dev-camper-key",
//       },
//       "web-dev-camper-secret"
//     );

//   const fetchingFunction = () =>
//     fetch(
//       "https://emsiservices.com/emsi-open-proxy-service/postings/us/taxonomies/title?q=python&limit=50",
//       {
//         headers: {
//           "Content-Type": "application/json",
//           authorization: `Bearer ${getToken()}`,
//         },
//       }
//     )
//       .then((res) => res.json())
//       .then((res) => console.log("Fetch Button Was Pressed", res.data));

//   useEffect(() => {
//     fetch(
//       "https://emsiservices.com/emsi-open-proxy-service/postings/us/taxonomies/title?q=python&limit=50",
//       {
//         headers: {
//           "Content-Type": "application/json",
//           authorization: `Bearer ${getToken()}`,
//         },
//       }
//     )
//       .then((res) => res.json())
//       .then((res) => console.log("UseEffect!", res.data));
//   });
//   return (
//     <div>
//       <div>
//         <button onClick={fetchingFunction}>Fetch Data</button>
//       </div>
//     </div>
//   );
// };

// export default Fetch;


// // .then((res) => console.log("UseEffect!", res.data[0].name));