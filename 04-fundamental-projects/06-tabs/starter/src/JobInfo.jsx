const JobInfo = ({jobs}) => {
    const{company, dates, duties, title} = jobs[0]
  return (
    <article className="job-info">
        <h3>{title}</h3>
        <span className="job-company">{company}</span>
        <p className="job-date">{date}</p>
    </article>
  )
}

export default JobInfo
