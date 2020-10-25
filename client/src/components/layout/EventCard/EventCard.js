import React from 'react'

function EventCard({length}) {
    // console.log({length})
    // console.log({length}.length)

    return (
        <div>
        {{length}.length === 0 ? (
            <div className="container">
                <h2 style={{paddingLeft: "20%"}}>No Upcoming Events Available</h2>
            </div>
        ) : (
            <div id="events-searched">
                <div className="container">
                    <h2 style={{paddingLeft: "10%"}}>Events: {length}</h2>
                </div>
            </div>   
        )}    
        </div>  
    )
}

export default EventCard