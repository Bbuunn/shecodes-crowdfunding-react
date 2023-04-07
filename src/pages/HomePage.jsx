import React, { useState, useEffect } from "react"
import { allProjects } from "../data"
import ProjectCard from "../components/ProjectCard"

function HomePage() {
  const [projectList, setProjectList] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}events`)
      .then((results) => {
        return results.json()
      })
      .then((data) => {
        setProjectList(data)
      })
  }, []) //comment: run when page first loads
  return (
    <div>
      {projectList.map((projectData, key) => {
        return <ProjectCard key={key} data={projectData} />
      })}
    </div>
  )
}

// array.map: do an action or render to each item in an array
export default HomePage
