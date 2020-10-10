import React, { useEffect, useState } from "react";
import Search from "../components/layout/Search/Search.js";
import Grid from "../components/layout/Grid/Grid.js";
import Header from "../components/layout/Header/Header.js";
import ArtistInfo from "../components/layout/ArtistInfo/ArtistInfo.js";
// import EventCard from "../components/layout/EventCard/EventCard.js";
import API from "../utils/API.js"

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
        API.fetchArtist(artist) .then( data => {
            // console.log (data.data)
            setArtistData({...artistData, ...data.data})
        } )
    }
    
    // Make API call here with artist name from Search.js(stored as state and pass state here)
    // Somehow, convert function createCard() into component?
    console.log(artistData)
    return (
        <div>
            <Header>
                <Search handleFormSubmit={handleFormSubmit}
                    handleInputChange={handleInputChange} />
            </Header>
            {!artistData.artist ? <Grid /> : <ArtistInfo  />}
            {/* {!artistData.artist ? <Grid /> : <EventCard/>} */}

        </div>
    )
}
export default Home
