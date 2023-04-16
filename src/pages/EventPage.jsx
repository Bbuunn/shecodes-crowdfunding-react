import React, { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"

function formatDate(isoDate) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const date = new Date(isoDate)
  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  const formattedDate = `${day} ${month} ${year}`

  return formattedDate
}

function EventPage() {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    image: "",
    is_open: true,
    created_at: "",
    online: false,
    location: "",
    min_attendees: 1,
    max_attendees: 10,
    owner: 0,
    attendances: [],
  })
  const [username, setUsername] = useState("")
  const {
    title,
    description,
    image,
    is_open,
    created_at,
    online,
    location,
    max_attendees,
    owner,
    attendances,
  } = eventData
  const { id } = useParams()
  const navigate = useNavigate()
  const token = window.localStorage.getItem("token")
  const userId = window.localStorage.getItem("user_id")
  const isOwner = token && userId === String(owner)

  function handleDelete() {
    fetch(`${import.meta.env.VITE_API_URL}events/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${token}`,
      },
    })
      .then((results) => {
        if (!results.ok) throw Error(results.json())
        navigate("/")
      })
      .catch((error) => {
        navigate("/not-found")
      })
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}events/${id}`) // get json
      .then((results) => {
        return results.json()
      })
      .then((data) => {
        if (data.detail === "Not found.") {
          const error = new Error("Not found.")
          error.status = 404
          throw error
        }
        setEventData(data) // json
      })
      .catch((error) => {
        navigate("/not-found")
      })
  }, [])

  useEffect(() => {
    if (owner > 0) {
      fetch(`${import.meta.env.VITE_API_URL}users/${owner}`) // get json
        .then((results) => {
          return results.json()
        })
        .then((data) => {
          setUsername(data.username) // json
        })
    }
  }, [owner])

  return (
    //fix: make sure .properties are in my insomnia
    <div>
      <div className="relative">
        <img
          className="hero h-[60vh] object-cover"
          src={image}
          alt="hero image"
        />
        <button className="btn btn-primary absolute bottom-8 right-8">
          Attend
        </button>
      </div>
      <div className="py-16 px-[20%]">
        {isOwner && (
          <div className="flex justify-end gap-4 mb-4">
            <Link to={`/event/${id}/edit`} state={{ eventData }}>
              <button className="btn btn-outline min-h-[2rem] h-8">Edit</button>
            </Link>
            <button
              className="btn btn-outline min-h-[2rem] h-8"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        )}

        <h1 className="text-6xl font-bold mb-4">{title}</h1>
        <p className="uppercase text-primary mb-4 text-sm">
          Created on {formatDate(created_at)} | Location: {location}
        </p>
        <p className="font-bold mb-16">Hosted by {username}</p>

        <p>{description}</p>
        <div className="divider"></div>

        <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
          <div className="stat">
            <div className="stat-title">Status</div>
            <div className="stat-value">{is_open ? "Open" : "Closed"}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Online / Offline</div>
            <div className="stat-value">{online ? "Online" : "Offline"}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Current Attendees</div>
            <div className="stat-value">{attendances.length}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Max Attendees</div>
            <div className="stat-value">{max_attendees}</div>
          </div>
        </div>

        <h2 className="text-4xl font-bold mt-12 mb-4">Attendance Status</h2>
        <progress
          className="progress progress-primary w-full h-8"
          value={(100 * attendances.length) / max_attendees}
          max="100"
        ></progress>
      </div>
    </div>
  )
}

export default EventPage
