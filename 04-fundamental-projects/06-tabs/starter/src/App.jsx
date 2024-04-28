import { useState, useEffect } from "react";

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
	return <h2>Tabs Starter</h2>;
};
export default App;
