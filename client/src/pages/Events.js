import React, { useState, useEffect } from 'react';
import Header from "../components/layout/Header/Header.js";
// import Row from "../components/layout/Row/Row.js";
import EventCard from "../components/layout/EventCard/EventCard.js";
import SavedEvent from "../components/layout/SavedEvent/SavedEvent.js";

function Events() {
  const [savedData, setSavedData] = useState([])

  // Loads saved events data to pass onto SavedEvent component
  useEffect(() => {
    // GET request to retrieve saved events from the back end
    fetch("/savedEvents", {
      method: "GET",
      headers: {
      "Content-Type": "application/json"
      },
    }).then(response => response.json())
      .then(res => {
      console.log(res)
      setSavedData(
          savedData.concat(res)
      )
    })
  }, [])

  return (
    <div>
      <Header />
      {/* <Row /> */}
      <EventCard />
      {!savedData.length ? (
        <br></br>
      ) : (
        savedData.map(event => {
            return <SavedEvent
              key={event.id}
              location={event.location}
              date={event.date}
              url={event.url}
              name={event.name}
            />
        })
      )}
    </div>
  )
}

export default Events

