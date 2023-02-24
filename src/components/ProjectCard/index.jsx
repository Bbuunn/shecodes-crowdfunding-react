import React from "react"
import { Link } from "react-router-dom"

// will be rendered on homepage
// props = object
function ProjectCard(props) {
  const { projectData } = props
  return (
    <div>
      <Link to={`/project/${projectData.id}`}>
        <img src={projectData.image}></img>
        <h3>{projectData.title}</h3>
      </Link>
    </div>
  )
}

export default ProjectCard
