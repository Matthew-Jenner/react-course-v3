import { useState, useEffect } from "react";
import JobInfo from './JobInfo'
import BtnContainer from "./BtnContainer";
const url = "/api/react-tabs-project"; // Use '/api' instead of full URL


const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0)
	//  currentItem

	const fetchJobs = async() => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: 
        ${response.status}`);
      }
    const newJobs = await response.json()
    console.log(newJobs);
    setJobs(newJobs)
    setIsLoading(false)
  } catch (error) {
    console.error('Error fetching jobs', error);
    setIsLoading(false)
  }}

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
      <BtnContainer jobs={jobs}
      currentItem={currentItem}
      setCurrentItem={setCurrentItem} />
      {/* {job info} */}
      <JobInfo jobs={jobs}currentItem={currentItem}/>
    </section>
  )
};
export default App;
