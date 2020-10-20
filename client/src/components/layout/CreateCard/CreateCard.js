import React from 'react'
import "./CreateCard.css"
import API from "../../../utils/API.js"

function CreateCard({ location, date, url }) {
    const locationResult = {location}.location
    const dateResult = {date}.date

    const saveThis = () => {
        API.saveEvent({
            date: dateResult.date,
            location: locationResult.location
        })
        // console.log(locationResult);
        // console.log(dateResult);
    }

    return (
        <section id="events-searched">
            <div className="container">
                <div id="events-area" className="row">
                    <div className="col s12 m12 l10 push-l1 xl8">
                        <div className="card blue-grey darken-1">
                            <div className="card-image">
                                <button className="btn-floating waves-effect waves-light red right" id="0"
                                    onClick={saveThis}
                                    style={{ marginRight: "10px", marginTop: "10px" }}>
                                    <i className="material-icons">add</i>
                                </button>
                                <button className="btn-floating waves-effect waves-light right"
                                    style={{ marginRight: "10px", marginTop: "10px" }}>
                                    <a href={url}
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                    >
                                    <i className="material-icons">shopping_cart</i>
                                    </a>
                                </button>
                            </div>
                            <div className="card-content white-text">
                            <span className="card-title" id="location-0" style={{ fontSize: "30px"}}>{location}</span>
                                <p id="date-0" style={{ fontSize: "16px"}}>{date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreateCard