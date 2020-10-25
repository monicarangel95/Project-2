import React, { useState } from 'react'
// import "./SavedEvent.css"

function SavedEvent({ location, date, url, name }) {

    return (
        <section id="events-searched">
            <div className="container">
                <div id="events-area" className="row">
                    <div className="col s12 m12 l10 push-l1 xl8 push-xl2">
                        <div className="card blue-grey darken-1">
                            <div className="card-image">
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
                            <span className="card-title" style={{ fontSize: "30px", fontWeight: "600"}}>{name}</span>
                                <p style={{ fontSize: "16px"}}>
                                    <span style={{ textDecorationLine: "underline"}}>Location</span>
                                    : {location}
                                </p>
                                <p style={{ fontSize: "16px"}}>
                                    <span style={{ textDecorationLine: "underline"}}>Date</span>
                                    : {date}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SavedEvent