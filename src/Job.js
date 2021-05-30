

const Job = ({ job }) => {
  console.log(job);
  return (
    <div>
      <ul>
        <li>{job.name}</li>
      </ul>
    </div>
  );
};

export default Job;
