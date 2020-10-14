import React from 'react'
import "./CreateCard.css"

function CreateCard({ location, date }) {
    // function createCard(date, location, number) **pass in with props

    return(
        <div class="col s12 m6">
            <div class="card blue-grey darken-1">
                <div class="card-image">
                    <button class="btn-floating waves-effect waves-light red right" id="0" 
                        onclick="savethis(this.id)" 
                        style={{marginRight: "10px", marginTop: "10px"}}>
                        <i class="material-icons">add</i>
                    </button>
                </div>
                <div class="card-content white-text">
                    <span class="card-title" id="location-0">{location}</span>
                        <p id="date-0">{date}</p>
                </div>
            </div>
        </div>
    )
}

export default CreateCard