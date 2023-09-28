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
        <div className="row">
          <div className="col">
            <div className="inputgroup">
              <label className="label"> Role </label>
              <input type="text" name="role" placeholder="Role"></input>
            </div>
          </div>
          <div className="col">
            <div className="inputgroup">
              <label className="label"> Location </label> 
              <input type="text" name="location" placeholder="Location"></input>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col">
            <div className="inputgroup">
              <label className="label"> Brand Image</label> 
              <input type="text" name="brand Image" placeholder="Brand Image"></input>
            </div>
          </div>
          <div className="col">
            <div className="inputgroup">
              <label className="label"> Date of Application </label>
              <input type="date" name="application Date" placeholder="Application Date"></input> 
            </div>
          </div>
        </div>
        <div className="row">
        <div className="textcol">
            <div className="inputgroup">
              <label className="label"> Description </label>
              <textarea input-type="textarea" name="description" placeholder="Description" style={{border: '1px solid black', borderRadius:"10px", width:"100%", boxSizing:"border-box" }}/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="inputgroup">
              <label className="label"> Give your overall interest in this role</label>
              <StarRating changeRating={changeRating} rating={rating}/>
            </div>
          </div>
          
        </div>
        <label> <input type="number" value={rating ? rating: '0' } name="interest Level" readOnly={true} style={{display: 'none'}}/></label>
        {/* <input type="number" min="1" max="5" name="interest Level" placeholder="Interest Level"></input> */}
        <button>Add This Job</button>
      </Form>
    </div>
  </div>
  {jobs.map((job) => <Job job={job} key={job.id} />)}
  </>;
};

export default Index;;

