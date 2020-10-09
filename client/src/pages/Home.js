import React, { useState } from 'react';
import Search from "../components/layout/Search/Search.js";
import Grid from "../components/layout/Grid/Grid.js";
import Header from "../components/layout/Header/Header.js";
import ArtistInfo from "../components/layout/ArtistInfo/ArtistInfo.js";
// import EventCard from "../components/layout/EventCard/EventCard.js";
// import API from "../utils/API.js"

function Home() {
    const [artist, setArtist] = useState("")
    const [artistData, setArtistData] = useState({})
    const [eventData, setEventData] = useState({})

    const handleInputChange = (event) => {
        event.preventDefault();
        setArtist(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(artist);
        // Make api calls here, update state, pass state and pass object to setArtistData
        // Update that object to have data
    } 


    // Make API call here with artist name from Search.js(stored as state and pass state here)
    // Somehow, convert function createCard() into component?
    return (
        <div>
            <Header>
                <Search handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange} />
            </Header>
            <Grid />
            <ArtistInfo />
                {/* Pass artistData as props into ArtistInfo*/}
                {/* If (!artistData) ? show Grid : hide Grid/show ArtistInfo */}
            {/* <EventCard /> */}
                {/* If (artistinfo && eventinfo) exists ? hide Grid : else show Grid */}
        </div>
    )
}
export default Home
