import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function CreateAccountForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })

  const navigate = useNavigate()

  const handleChange = (event) => {
    const { id, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    postData().then((response) => {
      navigate(`/login`)
    })
  }

  const postData = async () => {
    const response = await // fetch that does post
    fetch(`${import.meta.env.VITE_API_URL}users/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    return response.json()
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="card w-full shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label" htmlFor="username">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="input input-bordered"
                id="username"
                onChange={handleChange}
              />
            </div>

            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email:</span>
              </label>
              <input
                className="input input-bordered"
                onChange={handleChange}
                type="text"
                id="email"
                placeholder="Enter email"
              />
            </div>

            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                onChange={handleChange}
                type="password"
                id="password"
                placeholder="Password"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={handleSubmit}
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateAccountForm
