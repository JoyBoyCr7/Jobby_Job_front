import { useLoaderData, Form } from "react-router-dom";
import Job from "../components/Job";
const Index = (props) => {
  const jobs = useLoaderData()
  return <>
  <div>
    <h2>ADD A Job</h2>
    <Form method="post" action="/create">
      <input type="text" name="role" placeholder="Role"></input>
      <input type="text" name="location" placeholder="Location"></input>
      <input type="text" name="brand Image" placeholder="Brand Image"></input>
      <input type="text" name="description" placeholder="Description"></input>
      <input type="number" min="1" max="5" name="interest Level" placeholder="Interest Level"></input>
      <input type="date" name="application Date" placeholder="Application Date"></input>
      <button>Add This Job</button>
    </Form>
  </div>
  {jobs.map((job) => <Job job={job} key={job.id} />)}
  </>;
};

export default Index;;