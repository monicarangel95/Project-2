import React from 'react'
import "./ArtistInfo.css"; 

function ArtistInfo( {name, bio, genre, song1, song2, song3, song4, song5 } ) {
    // render() {
    return (
        <div id="artist" class="">
            {/* ARTIST CARD */}
            <div class="container z-depth-1" style={{ marginTop: "50px"}}>
                <div class="row">
                    {/* ARTIST NAME and PICTURE */}
                    <div class="col s12 l2 center" >
                        <img id="artist-image" class="z-depth-2"alt="Searched Artist"src="" style={{ marginTop: "20px", maxWidth: "150px"}} />
                    {/* ARTIST NAME */}
                    <h2 id="artist-name" style={{ marginTop: "0px"}} >
                        {name}
                    </h2>
                        <p style={{ marginTop: "-15px" }} >
                            <i id="genre">{genre}</i>
                        </p>
                    </div>
                    {/* ARTIST BIO & SONGS */}
                    <div class="col s12 l10" >
                        {/* BIO */}
                        <h6><strong>Biography</strong></h6>
                        <p id="summary">
                            {bio}
                        </p>
                    </div>
                    {/* TOP SONGS */}
                    <div class="col s12 l6">
                        <h6><strong>Top Songs</strong></h6>
                        <ul id="top-songs" class="collection">
                            <li id="song-0" class="collection-item">{song1}</li>
                            <li id="song-1" class="collection-item">{song2}</li>
                            <li id="song-2" class="collection-item">{song3}</li>
                            <li id="song-3" class="collection-item">{song4}</li>
                            <li id="song-4" class="collection-item">{song5}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
    // }
}

export default ArtistInfo;
