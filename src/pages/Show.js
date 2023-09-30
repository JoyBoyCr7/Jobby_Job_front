import { Link, useLoaderData, Form } from "react-router-dom";
import StarRating from "../components/Stars";
import { useState } from "react";
// destructuring the props needed to get our post, including router prop match
const Show = () => {
  const job = useLoaderData();
  const initialRating = job.interest_level
  const [rating, setRating] = useState(initialRating)
  console.log(rating)
  const changeRating = (newRating) => {
    setRating(newRating);
  };
  return (
    <div >
      <h1>{job.role}</h1>
      <div className="maindiv">
        <div className="form-container ">
          <h2> EDIT JOB</h2>
          <Form className="form" method="post" action={`/update/${job.id}`}>
            <div className="form-group">
              <label >Role</label>
              <input id="role" type="text" name="role" placeholder="Role" defaultValue={job.role}></input>
            </div>
            <div className="form-group">
              <label>Location</label>
              <input type="text" name="location" placeholder="Location" defaultValue={job.location}></input>
            </div>
            {/* <div className="form-group">
              <label>Brand Image</label>
              <input type="text" name="brand Image" placeholder="Brand Image" defaultValue={job.brand_image}></input>
            </div> */}
            <div className="form-group">
              <label>Description</label>
              <textarea type="text" name="description" placeholder="Description" defaultValue={job.description} style={{boxSizing:"border-box"}}></textarea>
            </div>
            <div className="form-group">
              <label>Application Date</label>
              <input type="date" name="application Date" placeholder="Application Date" defaultValue={job.application_date}></input>
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
          <Form method="post" action={`/delete/${job.id}`}>
            <button>DELETE JOB</button>
          </Form>
        </div>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;
