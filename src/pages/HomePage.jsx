import React, { useState, useEffect } from "react"
import EventCard from "../components/EventCard"
import HomePageHero from "../components/HomePageHero"

function HomePage() {
  const [eventList, setEventList] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}events`)
      .then((results) => {
        return results.json()
      })
      .then((data) => {
        setEventList(data)
      })
  }, []) //comment: run when page first loads
  return (
    <>
      <HomePageHero />
      <div className="p-8 flex flex-wrap gap-8">
        {eventList.map((eventData, key) => {
          return <EventCard key={key} data={eventData} />
        })}
      </div>
    </>
  )
}

// array.map: do an action or render to each item in an array
export default HomePage
