import React from 'react'

function EventCard({length}) {

    return (
        <section id="events-searched">
            <div className="container">
            <h2>Events: {length}</h2>
            </div>
        </section>        
    )
}

export default EventCard