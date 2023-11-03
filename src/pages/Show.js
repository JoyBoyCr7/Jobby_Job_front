import { Link, useLoaderData, Form } from "react-router-dom";
import StarRating from "../components/Stars";
import { useState } from "react";
// destructuring the props needed to get our post, including router prop match
const Show = () => {
  const job = useLoaderData();
  const initialRating = job.intrest_level
  const [rating, setRating] = useState(initialRating)
  const changeRating = (newRating) => {
    setRating(newRating);
  };
  return (
    <div >
      <Link to="/home" style={{textDecoration:"none"}}>
        <button style={{display:"flex", marginTop:"10px", marginLeft:"10px"}} className="btn-31">
          <span className="text-container">
            <span className="text">Go Back</span>
          </span>
      </button>
      </Link>
      <h1 style={{marginTop:"0px"}}>{job.location}</h1>
      <div className="maindiv">
        <div className="form-container ">
          <h2> EDIT JOB</h2>
          <Form className="form" method="post" action={`/update/${job._id}`}>
            <div className="form-group">
              <label >Role</label>
              <input id="role" type="text" name="role" placeholder="Role" defaultValue={job.role} required></input>
            </div>
            <div className="form-group">
              <label>Location</label>
              <input type="text" name="location" placeholder="Location" defaultValue={job.location} required></input>
            </div>
            {/* <div className="form-group">
              <label>Brand Image</label>
              <input type="text" name="brand Image" placeholder="Brand Image" defaultValue={job.brand_image}></input>
            </div> */}
            <div className="form-group">
              <label>Description</label>
              <textarea type="text" name="description" placeholder="Description" defaultValue={job.description} style={{boxSizing:"border-box"}} required></textarea>
            </div>
            <div className="form-group">
              <label>Application Date</label>
              <input type="date" name="application Date" placeholder="Application Date" defaultValue={job.application_date} required></input>
            </div>
            <div className="ypp" >
              <label>Rating</label>
              <div style={{display:"flex", justifyContent:"center"}}>
                <StarRating changeRating={changeRating} rating={rating} />
              </div>
            </div>
              <input type="number" value={rating ? rating: '0' } name="interest Level" readOnly={true} style={{display: 'none'}}/>
              {/* <input type="number" min="1" max="5" name="interest Level" placeholder="Interest Level" defaultValue={job.interest_level}></input> */}
              <button type="submit" className="mainbutton">CONFORM</button>
          </Form >
          <Form method="post" action={`/delete/${job._id}`} className="form">
            <button className="button2">DELETE JOB</button>
          </Form>
        </div>
        <div className="card shadow">
          <h1>{job.role}</h1>
          <p>{job.description}</p>
        </div>
      </div>
      {/* <Link to="/">
        <button>Go Back</button>
      </Link> */}
    </div>
  );
};

export default Show;
