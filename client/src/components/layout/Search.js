import React, { Component } from 'react'
import styles from './Search.css'; 
export class Search extends Component {
    // Initialization


    render() {
        return (
            <div class="container">
            <div class="row center" style="margin-top: 60px;" className={styles.searchBox}>
                <div id="search-area" class="col l7 s12 offset-l2" >
                    <form action="#">
                        <div class="input-field">
                            <input id="search-artist" type="text" class="materialize-textarea"/>
                            <label for="search-artist">Search Artist</label>
                        </div>
                    </form>
                </div>
                <div class="col l2 s12" style="padding-top: 23px">
                    <div id="search-button" class="btn waves-effect waves-light">Search</div>
                </div>
            </div>
            <div class="row">
            </div>
        </div>
        )
    }
}

export default Search
