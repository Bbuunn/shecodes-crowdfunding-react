import React from "react"
import errorImage from "../assets/404_error.gif"

function NotFound() {
  return (
    <div className="flex justify-center align-center">
      <img src={errorImage} alt="Not found" className="w-[500px]" />
    </div>
  )
}

export default NotFound
