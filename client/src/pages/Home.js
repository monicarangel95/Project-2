import React, { useState } from "react";
import Search from "../components/layout/Search/Search.js";
import Grid from "../components/layout/Grid/Grid.js";
import Header from "../components/layout/Header/Header.js";
import ArtistInfo from "../components/layout/ArtistInfo/ArtistInfo.js";
import EventCard from "../components/layout/EventCard/EventCard.js";
import CreateCard from "../components/layout/CreateCard/CreateCard.js";
import API from "../utils/API.js"

function Home() {
    const [artist, setArtist] = useState("")
    const [artistData, setArtistData] = useState({
        name: "",
        bio: "",
        genre: ""
    })
    const [songData, setSongData] = useState({
        song1: "",
        song2: "",
        song3: "",
        song4: "",
        song5: "",
    })
    const [artistImage, setArtistImage] = useState({
        // eventCount: 0,
        image: ""
    })
    const [eventCount, setEventCount] = useState([]);

    const [eventData, setEventData] = useState([])

    const handleInputChange = event => {
        event.preventDefault();

        // const { value } = event.target;
        // setEventData(value);
        setArtist(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // console.log(artist);
        API.fetchArtist(artist)
            .then(data => {
                setArtistData({
                    name: data.data.artist.name,
                    bio: data.data.artist.bio.summary,
                    genre: data.data.artist.tags.tag[0].name
                });
            });

        API.fetchSongs(artist)
            .then(data => {
                setSongData({
                    song1: data.data.toptracks.track[0].name,
                    song2: data.data.toptracks.track[1].name,
                    song3: data.data.toptracks.track[2].name,
                    song4: data.data.toptracks.track[3].name,
                    song5: data.data.toptracks.track[4].name
                })
            })

        API.fetchImage(artist)
            .then(data => {
                setArtistImage({
                    image: data.data.image_url
                })
            })

        API.fetchEvents(artist)
            .then(data => {
                if (data.data.length === 0) {
                    throw new Error("No results found.");
                }
                setEventData( 
                    eventData.concat(data.data)
                )
                console.log(data.data)
                // setEventData( eventData => eventData.push (data.data
                    
                //     )
                    // upcomingeventsarray: data.data
             
                    // upcomingeventscount: data.data.length,
                    // upcomingeventsarray: data.data,
                    // date: new Date(Date.parse(data.data[i].datetime)),

                    // location: data.data[i].venue.location
                
                console.log(eventData)
            })

    }

    // console.log(artistData)
    // console.log(artistImage)
    console.log(eventData)
    console.log(eventData)
    // console.log(eventCount)
    // Convert function createCard() into component, then pass in location/date state to that component

    return (
        <div>
            <Header>
                <Search handleFormSubmit={handleFormSubmit}
                    handleInputChange={handleInputChange} />
            </Header>
            {!artistData.name ? <Grid /> :
                <ArtistInfo
                    name={artistData.name}
                    bio={artistData.bio}
                    genre={artistData.genre}
                    image={artistImage.image}
                    song1={songData.song1}
                    song2={songData.song2}
                    song3={songData.song3}
                    song4={songData.song4}
                    song5={songData.song5}
                />}
            {!eventData.length ? (
                <h1 className="text-center"></h1>
            ) : (
                eventData.map ( event => {
                    return  <CreateCard
 
                    date={new Date (event.datetime) .toDateString()}
                    location={event.venue.location}

                />
                })
                )}

        </div>
    );
}
export default Home
