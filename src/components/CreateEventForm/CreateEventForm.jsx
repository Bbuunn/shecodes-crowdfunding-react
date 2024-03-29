import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import EventForm from "../EventForm"

function CreateEventForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    online: false,
    location: "",
    min_attendees: 1,
    max_attendees: 10,
  })

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
    postData().then((response) => {
      navigate(`/event/${response.id}`)
    })
  }

  const postData = async () => {
    const token = window.localStorage.getItem("token")
    const response = await // fetch that does post
    fetch(`${import.meta.env.VITE_API_URL}events/`, {
      method: "post",
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
      buttonText="Create Event"
    />
  )
}

export default CreateEventForm
