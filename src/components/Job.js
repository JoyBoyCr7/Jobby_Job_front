import { Link } from "react-router-dom";
import StarRating from "./Stars";
import Starfrozen from "./Starsfrozen";
const Job = ({job}) => {
  const rating = job.interest_level
  return (
    <div>
      
      <div className="main" style={{marginRight:"10px"}}>
        <div className="role"> 
          <h2> {job.role}</h2> <h2><Starfrozen rating={rating}/></h2> 
        </div>
        <div className="role" style={{color:"rgb(67, 66, 69)"}}>
          <h3 style={{marginTop:"0px",marginBottom:"0px"}}>{job.location} {job.application_date}</h3>
        </div>
        <div className="role" style={{fontSize:"1.1rem"}}>
          <p style={{textAlign:"left", fontFamily:"NAMU, sans-serif"}}  >{job.description}</p>
        </div>
      </div>
        <Link to={`/jobs/${job.id}`} className="details" style={{display:"flex"}}>
        Manage Details
        </Link>
    </div>
    
  );}
  
  export default Job;