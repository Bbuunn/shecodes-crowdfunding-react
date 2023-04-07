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
    <>
      <div className="hero bg-base-200 py-12">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="p-8">
        {projectList.map((projectData, key) => {
          return <ProjectCard key={key} data={projectData} />
        })}
      </div>
    </>
  )
}

// array.map: do an action or render to each item in an array
export default HomePage
