import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function CreateAccountForm() {
  const [formData, setFormData] = useState({
    username: "",
    // email: "",
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

export default CreateAccountForm
