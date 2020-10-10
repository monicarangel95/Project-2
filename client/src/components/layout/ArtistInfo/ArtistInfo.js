import React from 'react'
import "./ArtistInfo.css"; 

function ArtistInfo() {
    // render() {
    return (
        <div id="artist" class="">
            {/* ARTIST CARD */}
            <div class="container z-depth-1" style={{ marginTop: "50px"}}>
                <div class="row">
                    {/* ARTIST NAME and PICTURE */}
                    <div class="col s12 l2 center" >
                        <img id="artist-image" class="z-depth-2"alt="Picture of Searched Artist"src="" style={{ marginTop: "20px", maxWidth: "150px"}} />
                    {/* ARTIST NAME */}
                    <h2 id="artist-name" style={{ marginTop: "0px"}} />
                        <p style={{ marginTop: "-15px" }} >
                            <i id="genre"></i>
                        </p>
                    </div>
                    {/* ARTIST BIO & SONGS */}
                    <div class="col s12 l10" >
                        {/* BIO */}
                        <h6><strong>Biography</strong></h6>
                        <p id="summary"></p>
                    </div>
                    {/* TOP SONGS */}
                    <div class="col s12 l6">
                        <h6><strong>Top Songs</strong></h6>
                        <ul id="top-songs" class="collection">
                            <li id="song-0" class="collection-item">Song 0</li>
                            <li id="song-1" class="collection-item">Song 1</li>
                            <li id="song-2" class="collection-item">Song 2</li>
                            <li id="song-3" class="collection-item">Song 3</li>
                            <li id="song-4" class="collection-item">Song 4</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
    // }
}

export default ArtistInfo;
