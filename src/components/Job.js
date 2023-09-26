import { Link } from "react-router-dom";
const Job = ({job}) => {
  return (
    <div >
      <Link to={`/jobs/${job.id}`}>
        <h1>{job.role}</h1>
      </Link>
      <h2>{job.description}</h2>
    </div>
  );}
  
  export default Job;