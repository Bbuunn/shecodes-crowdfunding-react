import React from "react"
import { Link } from "react-router-dom"
import heroImage from "../../assets/2gather_hero.jpeg"

function HomePageHero() {
  return (
    <div
      className="hero min-h-[30vh]"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h1 className="mb-5 text-5xl font-bold">
            Community building & skill sharing
          </h1>
        </div>
      </div>
    </div>
  )
}

export default HomePageHero
