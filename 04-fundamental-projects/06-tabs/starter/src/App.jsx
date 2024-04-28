import { useState, useEffect } from "react";
import JobInfo from './JobInfo'
const url = "https://course-api.com/react-tabs-project";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [jobs, setJobs] = useState([]);
	//  currentItem

	const fetchJobs = async() => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setIsLoading(false)
  }

	useEffect(() => {
    fetchJobs()
  }, []);
	if(isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }
  return (
    <section className="jobs-center">
      {/* {button container} */}
      {/* {job info} */}
      <JobInfo/>
    </section>
  )
};
export default App;
