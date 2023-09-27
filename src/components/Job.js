import { Link } from "react-router-dom";
const Job = ({job}) => {
  console.log(job.role)
  return (
    <div>
      <div className="main">
        <div className="role"> 
          <h2 >{job.role}</h2> <div> <h2 >{job.interest_level}</h2> 
          </div> 
        </div>
        <h3 style={{margin:'0px auto'}}>{job.location}</h3>
        <p>{job.description}</p>
      </div>
        <Link to={`/jobs/${job.id}`}>
        <h1>{job.role}</h1>
        </Link>
    </div>
  );}
  
  export default Job;