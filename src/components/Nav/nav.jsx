// index.jsx name equivalent to nav.jsx
import React from "react"
import { Link } from "react-router-dom"
import "./nav.css/"

function Nav() {
  const ShowLoginButton = window.localStorage.getItem("token") == null
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
    loginStuff = <div>you're logged in</div>
  }

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
