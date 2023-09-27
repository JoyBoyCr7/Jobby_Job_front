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
      <h2>{job.description}</h2>
      <div>
        <h2> EDIT JOB</h2>
        <Form method="post" action={`/update/${job.id}`}>
          <input type="text" name="role" placeholder="Role" defaultValue={job.role}></input>
          <input type="text" name="location" placeholder="Location" defaultValue={job.location}></input>
          <input type="text" name="brand Image" placeholder="Brand Image" defaultValue={job.brand_image}></input>
          <input type="text" name="description" placeholder="Description" defaultValue={job.description}></input>
          <StarRating changeRating={changeRating} rating={rating}/>
          <input type="number" value={rating ? rating: '0' } name="interest Level" readOnly={true} style={{display: 'none'}}/>
          {/* <input type="number" min="1" max="5" name="interest Level" placeholder="Interest Level" defaultValue={job.interest_level}></input> */}
          <input type="date" name="application Date" placeholder="Application Date" defaultValue={job.application_date}></input>
          <button>CONFORM</button>
        </Form >
        <Form method="post" action={`/delete/${job.id}`}>
          <button>DELETE JOB</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;
