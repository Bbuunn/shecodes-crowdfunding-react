import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function ProjectPage() {
  const [projectData, setProjectData] = useState({ attendees: [] })
  const { id } = useParams()
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}events/${id}`) // get json
      .then((results) => {
        return results.json()
      })
      .then((data) => {
        setProjectData(data) // json
      })
  }, [])
  console.log(projectData)
  console.log(projectData.attendees)
  return (
    //fix: make sure .properties are in my insomnia
    <div>
      <h2>{projectData.title}</h2>
      <h3>Created at: {projectData.date_created}</h3>
      <h3>{`Status: ${projectData.is_open}`}</h3>
      <h3>Attendees:</h3>
      <ul>
        {projectData.attendees.map((attendeeData, key) => {
          return <li>{attendeeData.amount}</li> // L.I. element
        })}
      </ul>
    </div>
  )
}

export default ProjectPage
