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
    //   console.log(credentials)
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
    <form>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          onChange={handleChange}
          type="text"
          id="username"
          placeholder="Enter username"
        ></input>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          onChange={handleChange}
          type="password"
          id="password"
          placeholder="Password"
        ></input>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
      {/* button within a function - need to specify type, will use for pledge */}
    </form>
  )
}

export default LoginForm
