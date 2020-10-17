import React from 'react'
import "./CreateCard.css"

function CreateCard({ location, date }) {
    // function createCard(date, location, number) **pass in with props

    return (
        <section id="events-searched">
            <div className="container">
                <div id="events-area" className="row">
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-image">
                                <button className="btn-floating waves-effect waves-light red right" id="0"
                                    onClick="savethis(this.id)"
                                    style={{ marginRight: "10px", marginTop: "10px" }}>
                                    <i className="material-icons">add</i>
                                </button>
                            </div>
                                <div className="card-content white-text">
                                <span className="card-title" id="location-0">{location}</span>
                                    <p id="date-0">{date}</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreateCard