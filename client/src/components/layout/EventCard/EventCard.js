import React from 'react'

function EventCard(noEvents){
    // function createCard(date, location, number) **pass in with props


    return(
        <div className="container">
        <div id="events-area" className="row">
            <h2><strong>Events</strong></h2>
            <div id="delete" className="col l12 s12 m6">
                <div className="card blue-grey darken-1">
                <div className="card-image">
                <button className="btn-floating waves-effect waves-light red right" style={{marginRight: "10px", marginTop: "10px"}}><i className="material-icons">add</i></button>
                </div>
                <div className="card-content white-text">
                <span className="card-title">Event Number 1: Test Location & Date</span>
                <p>More information of event can go here</p>
                </div>
                </div>
            </div>
            <div id="no-events"className="col l12 s12 center">
                <h2 className={noEvents}>No Upcoming Events</h2>
            </div>
        </div>
    </div>
    )
}

export default EventCard