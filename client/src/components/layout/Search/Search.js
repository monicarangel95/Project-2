import React from 'react';
import "./Search.css"; 

function Search(props) {
    // Initialization

    // render() {
        return (
            <div className="header">
                <div className="row center" style= {{marginTop: "60px"}} >
                    <div id="search-area" class="col l7 s12 offset-l2" >
                        <form action="#">
                            <div class="input-field">
                                <input 
                                    id="search-artist"
                                    type="text" 
                                    class="materialize-textarea"/>
                                <label for="search-artist">Search Artist</label>
                            </div>
                        </form>
                    </div>
                    <div class="col l2 s12" style= {{paddingTop: "23px"}}>
                        <div id="search-button" class="btn waves-effect waves-light">Search</div>
                    </div>
                </div>
                <div class="row">
                </div>
            </div>
        )
    // }
}

export default Search
