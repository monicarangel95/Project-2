import React from 'react'
import "./CreateCard.css"

function CreateCard({ location, date, url, name }) {
    // Post request to save to the back end
    const saveThis = ({ location, date, url, name }) => {
        fetch("/savedEvents", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                location: location,
                date: date,
                url: url,
                name: name
            })
        }).then(res => {
            return res.json();
        });
    }

    return (
        <section id="events-searched">
            <div className="container">
                <div id="events-area" className="row">
                    <div className="col s12 m12 l10 push-l1 xl8 push-xl2">
                        <div className="card blue-grey darken-1">
                            <div className="card-image">
                                <button className="btn-floating waves-effect waves-light red right"
                                    onClick={() => {
                                        saveThis({ location, date, url, name });
                                    }}
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
                            <span className="card-title" style={{ fontSize: "30px"}}>{location}</span>
                                <p style={{ fontSize: "16px"}}>{date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreateCard