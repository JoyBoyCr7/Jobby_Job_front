import { useLoaderData, Form } from "react-router-dom";
import Job from "../components/Job";
import StarRating from "../components/Stars";
import { useState } from "react";
import SimpleSlider from "../components/slider";

const Index = () => {
  const jobs = useLoaderData()
  const [rating, setRating] = useState(null)
  const changeRating = (newRating) => {
    setRating(newRating);
  };
  return <>
  <div>
      <h2>Jobby Job</h2>
      <Form className="Mainform" method="post" action="/create">
        <h3 style={{marginTop:"0px"}}>ADD A Job</h3>
        <div className="row">
          <div className="col">
            <div className="input-group">
              <label className="label"> Role </label>
              <div style={{display: "flex"}}><input type="text" name="role" placeholder="Role" className="input" required></input></div>
            </div>
          </div>
          <div className="col">
            <div className="input-group">
              <label className="label"> Location </label> 
              <div style={{display: "flex"}}><input type="text" name="location" placeholder="Location" className="input" required></input></div>
            </div>
          </div>
        </div>
        
        <div className="row">
          {/* <div className="col">
            <div className="input-group">
              <label className="label"> Brand Image</label> 
              <input type="text" name="brand Image" placeholder="Brand Image" className="input"></input>
            </div>
          </div> */}
          <div className="col">
            <div className="input-group">
              <label className="label"> Date of Application </label>
              <div style={{display: "flex"}}><input type="date" name="application Date" placeholder="Application Date" className="input" required></input> </div>
            </div>
          </div>
          <div className="col">
            <div className="input-group">
              <label className="label" required> Give your overall interest in this role</label>
              <StarRating changeRating={changeRating} rating={rating}/>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="textcol">
            <div className="input-group">
              <label className="label"> Description </label>
              <textarea input-type="textarea" name="description" placeholder="Description" style={{border: '1px solid black', borderRadius:"10px", width:"100%", boxSizing:"border-box" }} rows="6" required/>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col">
            <div className="input-group">
              <label className="label"> Give your overall interest in this role</label>
              <StarRating changeRating={changeRating} rating={rating}/>
            </div>
          </div> */}
          
        </div>
        <label> <input type="number" value={rating ? rating: '0' } name="interest Level" readOnly={true} style={{display: 'none'}}/></label>
        {/* <input type="number" min="1" max="5" name="interest Level" placeholder="Interest Level"></input> */}
        <button className="mainbutton">Add This Job</button>
      </Form>
    </div>
  
  <SimpleSlider divs={jobs.map((job) => <Job job={job} key={job.id} />)}/>
  </>;
};

export default Index;;

