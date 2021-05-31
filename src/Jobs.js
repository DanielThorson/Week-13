import React from "react";
import Job from "./Job.js";



const Jobs = (props) => {
const jobs = (props.jobs);
// return ('dsds'
// )
  // jobs.map((job) => {
  //   return <Job job={job.name} />;
  // });


  return (
    <div>
      <Job jobs={jobs} />
    </div>
  );
};

// const Jobs = ({ jobs }) => {
//   return (
//     <div>
//       <div>
//         {jobs.map((job) => {
//           return <Job job={job} />;
//         })}
//       </div>
//     </div>
//   );
// };

export default Jobs;

// {
//   jobs.map((item) => {
//     return <Job job={item.name} />;
//   });
// }
