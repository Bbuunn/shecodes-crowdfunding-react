import React from "react"
import { Link } from "react-router-dom"

// will be rendered on homepage
// props = object
function ProjectCard({ data }) {
  // const { data } = props // ^ Reverted to destructure in the parameter directly
  const { id, image, title, description, is_open, online } = data

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <Link to={`/event/${id}`}>
        <figure className="h-[300px] rounded-t-2xl">
          <img className="w-full object-cover" src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="truncate">{description}</p>
          <div className="card-actions justify-end">
            {is_open && <div className="badge badge-primary">OPEN</div>}
            {online && <div className="badge badge-secondary">ONLINE</div>}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProjectCard
