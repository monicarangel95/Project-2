import React from 'react'
import "./Search.css"; 

const Search = (props) => {
    return (
        <div className="center">
            <div id="search-area" class="col l5 s12 offset-l3" >
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
            <div class="col l2 s12" style= {{paddingTop: "15px"}}>
                <div
                    id="search-button"
                    class="btn waves-effect waves-light"
                    onClick={props.handleFormSubmit}
                    type="submit"
                    > Search
                </div>
            </div>
        </div>
    )
}
export default Search
