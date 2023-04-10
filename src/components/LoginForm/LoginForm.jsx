import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })

  const navigate = useNavigate()

  const handleChange = () => {
    const { id, value } = event.target
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        window.localStorage.setItem("token", response.token)
        navigate("/")
      })
    }
  }

  const postData = async () => {
    const response = await // fetch that does post
    fetch(`${import.meta.env.VITE_API_URL}api-token-auth/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
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
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
