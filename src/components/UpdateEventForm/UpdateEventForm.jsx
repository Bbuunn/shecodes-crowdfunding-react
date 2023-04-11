import React, { useState } from "react"
import { useParams, useNavigate, useLocation } from "react-router-dom"
import EventForm from "../EventForm"

function UpdateEventForm() {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state.projectData)

  const { eventId } = useParams()
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { id, value, checked } = event.target

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: id === "online" ? checked : value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    putData().then((response) => {
      navigate(`/event/${response.id}`)
    })
  }

  const putData = async () => {
    const token = window.localStorage.getItem("token")
    const response = await // fetch that does post
    fetch(`${import.meta.env.VITE_API_URL}events/${eventId}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${token}`,
      },
      body: JSON.stringify(formData),
    })
    return response.json()
  }

  return (
    <EventForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formData={formData}
      buttonText="Update Event"
    />
  )
}

export default UpdateEventForm
