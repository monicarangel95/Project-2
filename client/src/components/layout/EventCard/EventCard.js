import React, { Component } from 'react'

function EventCard(props){
    return(
        <div class="container">
        <div id="events-area" class="row">
            <h2><strong>Events</strong></h2>
            <div id="delete" class="col l12 s12 m6">
                <div class="card blue-grey darken-1">
                <div class="card-image">
                <button class="btn-floating waves-effect waves-light red right" style={{marginRight: "10px", marginTop: "10px"}}><i class="material-icons">add</i></button>
                </div>
                <div class="card-content white-text">
                <span class="card-title">Event Number 1: Test Location & Date</span>
                <p>More information of event can go here</p>
                </div>
                </div>
            </div>
            <div id="no-events"class="col l12 s12 center">
                <h2 class="">No Upcoming Events</h2>
            </div>
        </div>
    </div>
    )
}

export default EventCard