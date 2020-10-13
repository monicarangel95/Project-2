import React from 'react'
import "./ArtistInfo.css"; 

function ArtistInfo({ name, bio, genre, song1, song2, song3, song4, song5, image }) {
    return (
        <div id="artist">
            {/* ARTIST CARD */}
            <div class="container z-depth-1" style={{ marginTop: "50px"}}>
                <div class="row">
                    <div class="col s12 l2 center" >
                    {/* ARTIST IMAGE */}
                        <img id="artist-image" class="z-depth-2"
                        style={{ marginTop: "20px", maxWidth: "150px"}}
                        src={image}
                        alt="Searched Artist"
                        />
                    {/* ARTIST NAME */}
                        <h4 id="artist-name">{name}</h4>
                        <p> <i id="genre">{genre}</i> </p>
                    </div>
                    {/* ARTIST BIO & SONGS */}
                    <div class="col s12 l10" >
                    {/* BIO */}
                        <h6><strong>Biography</strong></h6>
                        <p id="summary">{bio}</p>
                    </div>
                    {/* TOP SONGS */}
                    <div class="col s12 l6">
                        <h6><strong>Top Songs</strong></h6>
                        <ul id="top-songs" class="collection">
                            <li id="song-0" class="collection-item">1. {song1}</li>
                            <li id="song-1" class="collection-item">2. {song2}</li>
                            <li id="song-2" class="collection-item">3. {song3}</li>
                            <li id="song-3" class="collection-item">4. {song4}</li>
                            <li id="song-4" class="collection-item">5. {song5}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistInfo;
