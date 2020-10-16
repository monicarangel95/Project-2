import React from 'react'
import "./Search.css"; 

const Search = (props) => {
    return (
        <div className="center">
            <div id="search-area" className="col l5 s6 offset-s3 offset-l3" >
                <form action="#">
                    <div className="input-field">
                        <input 
                            id="search-artist"
                            type="text" 
                            className="materialize-textarea"
                            onChange={props.handleInputChange}
                            />
                        <label htmlFor="search-artist">Search Artist</label>
                    </div>
                </form>
            </div>
            <div className="col l2 s12" style= {{paddingTop: "15px"}}>
                <div
                    id="search-button"
                    className="btn waves-effect waves-light"
                    onClick={props.handleFormSubmit}
                    type="submit"
                    > Search
                </div>
            </div>
        </div>
    )
}
export default Search
