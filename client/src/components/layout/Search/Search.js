import React, { useState } from 'react'
import "./Search.css"; 

const Search = (props) => {
    // state = {}       **[a variable to store data in]**
    // setState that includes object with artist name in search
    // const [artist, setArtist] = useState("")

    // function handleSubmit()
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     console.log("Artist's name is '" + artist + "'");
    // };

    // render() {
        return (
            <div>
                <div className="center">
                    <div id="search-area" class="col l7 s12 offset-l2" >
                        <form action="#">
                            <div class="input-field">
                                <input 
                                    id="search-artist"
                                    type="text" 
                                    class="materialize-textarea"
                                    onChange={props.handleInputChange}
                                    />
                                <label for="search-artist">Search Artist</label>
                            </div>
                        </form>
                    </div>
                    <div class="col l2 s12" style= {{paddingTop: "23px"}}>
                        <div
                            id="search-button"
                            class="btn waves-effect waves-light"
                            onClick={props.handleFormSubmit}
                            type="submit"
                            > Search
                        </div>
                        {/* // replace ^^ with onclick = function handleSubmit()
                    // conditional rendering: if artist-info exists, populate; else don't */}
                    </div>
                </div>
            </div>
        )
    // }
}
export default Search
