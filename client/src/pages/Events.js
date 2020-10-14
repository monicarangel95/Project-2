import React from 'react';
// import Search, { Navbar } from "../components/layout/Navbar/Navbar.js";
import Header from "../components/layout/Header/Header.js";
// import Row from "../components/layout/Row/Row.js";
import EventCard from "../components/layout/EventCard/EventCard.js";

function Events() {
  
  return (
    <div>
      {/* <Navbar/> */}
      <Header />
      {/* <Row /> */}
      <EventCard />
    </div>
  )
}

export default Events

