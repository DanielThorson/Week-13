import React from "react";
import Job from "./Job.js";


const Jobs = ({ jobs }) => {
    return (
      <div>
          {jobs.map((item) => {
            return <Job job={item.name} />;
          })}

      </div>
    );
  };
  
  export default Jobs;