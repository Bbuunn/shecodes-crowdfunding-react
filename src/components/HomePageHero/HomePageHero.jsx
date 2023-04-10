import React from "react"
import { Link } from "react-router-dom"
import heroImage from "../../assets/2gather_hero.jpeg"

function HomePageHero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h1 className="mb-5 text-5xl font-bold">2gather</h1>
          <p className="mb-5">
            Crowdfunding platform for community building and skill sharing
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePageHero
