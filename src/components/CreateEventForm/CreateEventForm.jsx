import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

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
    <div className="min-h-screen bg-base-200 py-16 px-[20%]">
      <div className="card w-full shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="form-control">
            <label className="label" htmlFor="title">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Enter title"
              className="input input-bordered"
              id="title"
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="description">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              onChange={handleChange}
              id="description"
              placeholder="Enter email"
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label" htmlFor="image">
              <span className="label-text">Image</span>
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="image"
              placeholder="Enter Image URL"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label cursor-pointer" htmlFor="online">
              <span className="label-text">Online</span>
              <input
                onChange={handleChange}
                type="checkbox"
                id="online"
                className="checkbox"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label" htmlFor="location">
              <span className="label-text">Location</span>
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="location"
              placeholder="Enter Event Location"
              className="input input-bordered"
            />
          </div>

          <div className="flex justify-between gap-4">
            <div className="form-control grow">
              <label className="label" htmlFor="min-attendees">
                <span className="label-text">Minimum attendees</span>
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="min-attendees"
                placeholder="Enter Minimum Attendees"
                className="input input-bordered"
              />
            </div>

            <div className="form-control grow">
              <label className="label" htmlFor="max-attendees">
                <span className="label-text">Maximum attendees</span>
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="max-attendees"
                placeholder="Enter Maximum Attendees"
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleSubmit}
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateEventForm
