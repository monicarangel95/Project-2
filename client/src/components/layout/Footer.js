import React, { Component } from 'react'

function Footer(props){
    return(
<footer class="page-footer blue-grey darken-2">
    <div class="container">
        <div class="row">
            <div class="col l6 s8">
                <h5 class="white-text">Team Spot-A-Show</h5>
                <p class="grey-text text-lighten-4">This project was made by Monica Rangel, Jaqueilin Rocha, Andrew Yen,
                    and Raffay Ahmed.</p>
            </div>
            <div class="col l4 offset-l2 s4">
                <h5 class="white-text">Github Profiles</h5>
                <ul>
                    <li><a class="grey-text text-lighten-3" href="https://github.com/monicarangel95">Monica</a></li>
                    <li><a class="grey-text text-lighten-3" href="https://github.com/jackier94">Jaqueilin</a></li>
                    <li><a class="grey-text text-lighten-3" href="https://github.com/andrewyen64">Andrew</a></li>
                    <li><a class="grey-text text-lighten-3" href="https://github.com/rahme">Raffay</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-copyright blue-grey darken-3">
        <div class="container">
            © 2020 Copyright Spot-A-Show
        </div>
    </div>
</footer>
    )
}

export default Footer