// index.jsx name equivalent to nav.jsx
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./nav.css/"

function Nav() {
  const ShowLoginButton = window.localStorage.getItem("token") == null
  const navigate = useNavigate()
  const onLogOut = (event) => {
    event.preventDefault()
    localStorage.clear()
    navigate("/")
  }
  let loginStuff
  if (ShowLoginButton) {
    loginStuff = (
      <div>
        <div>
          <Link to="/login">Login</Link>
          <button>
            <Link to="/createaccount">Create an account</Link>
          </button>
        </div>
      </div>
    )
  } else {
    loginStuff = (
      <div>
        <div>you're logged in</div>
        <div>
          <button onClick={onLogOut}>Log Out</button>
        </div>
      </div>
    )
  }
  console.log(loginStuff)

  return (
    <nav>
      <div className="navbar">
        <Link to="/">Home</Link>
        {loginStuff}
      </div>
      {/* <Link to="/project">Project</Link> */}
    </nav>
  )
}

export default Nav
