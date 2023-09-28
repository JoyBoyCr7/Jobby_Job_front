import { Link } from "react-router-dom";
import StarRating from "./Stars";
import Starfrozen from "./Starsfrozen";
const Job = ({job}) => {
  console.log(job.role)
  const rating = job.interest_level
  return (
    <div>
      <div className="main">
        <div className="role"> 
          <h2 >{job.role}</h2> <div> <h2 ><Starfrozen rating={rating}/></h2> 
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