import { useLoaderData } from "react-router-dom";
import Job from "../components/Job";
const Index = (props) => {
  const jobs = useLoaderData()
  // For each post in the array render a Post component
  return jobs.map((job) => <Job job={job} key={job.id} />);
};

export default Index;;