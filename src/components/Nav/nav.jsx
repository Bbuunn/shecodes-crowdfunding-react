// index.jsx name equivalent to nav.jsx
import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import "./nav.css/"

function Nav() {
  const loggedIn = window.localStorage.getItem("token") == null
  const navigate = useNavigate()

  const onLogOut = (event) => {
    event.preventDefault()
    localStorage.clear()
    navigate("/")
  }

  let loginLinks = loggedIn ? (
    <>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/createaccount">Create an account</NavLink>
      </li>
    </>
  ) : (
    <li>
      <button onClick={onLogOut}>Log Out</button>
    </li>
  )

  return (
    <nav className="navbar bg-base-100 mb-8">
      <div className="flex-1">
        <NavLink to="/">
          <span className="btn btn-ghost normal-case text-3xl font-bold">
            2gather
          </span>
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/create-event">Create Event</NavLink>{" "}
            {/* TODO: Prompt users to create account if not logged in */}
          </li>
          {loginLinks}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
