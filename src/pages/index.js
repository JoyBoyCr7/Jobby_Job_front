import { useLoaderData, Form } from "react-router-dom";
import Job from "../components/Job";
import StarRating from "../components/Stars";
import { useState } from "react";

const Index = () => {
  const jobs = useLoaderData()
  const [rating, setRating] = useState(null)
  console.log(rating)
  const changeRating = (newRating) => {
    setRating(newRating);
  };
  return <>
  <div>
    <div className="container">
      <h2>ADD A Job</h2>
      <Form className="Mainform" method="post" action="/create">
        <div>
          <label> Role </label>
          <div>
          <input type="text" name="role" placeholder="Role"></input>
          </div>
        </div>
        <div>
          <label> <h3>Location</h3> </label> 
          <div>
          <input type="text" name="location" placeholder="Location"></input>
          </div>
        </div>
        <div>
          <label> <h3>Brand Image</h3></label> 
          <div>
            <input type="text" name="brand Image" placeholder="Brand Image"></input>
          </div>
        </div>
        <div>
          <label> <h3>Description</h3> </label>
          <div>
          <textarea input-type="textarea" name="description" placeholder="Description"/>
          </div>
        </div>
        <div>
          <label> <h3>Give your overall interest in this role</h3></label>
          <StarRating changeRating={changeRating} rating={rating}/>
        </div>
        <label> <input type="number" value={rating ? rating: '0' } name="interest Level" readOnly={true} style={{display: 'none'}}/></label>
        {/* <input type="number" min="1" max="5" name="interest Level" placeholder="Interest Level"></input> */}
        <div>
          <label> <h3>Date of Application</h3> </label>
          <div>
          <input type="date" name="application Date" placeholder="Application Date"></input> 
          </div>
        </div>
        <button>Add This Job</button>
      </Form>
    </div>
  </div>
  {jobs.map((job) => <Job job={job} key={job.id} rating={rating}/>)}
  </>;
};

export default Index;;