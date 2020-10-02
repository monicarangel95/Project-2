import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js";

export class Navbar extends Component {
    // Initialization
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });
    }
    render() {
        return (
            <div>
                <nav class="nav-wrapper black z-depth-5">
                    <div class="container">
                        <a href="index.html" class="brand-logo"><strong>Spot-A-Show</strong></a>
                        <a href="#" class="sidenav-trigger" data-target="mobile-links">
                            <i class="material-icons">menu</i>
                        </a>
                        <ul class="right hide-on-med-and-down">
                            <li><a href="#">Home</a></li>
                            <li><a href="/events">Events</a></li>
                        </ul>
                    </div>
                </nav>
                <ul class="sidenav" id="mobile-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="/events">Events</a></li>
                </ul>
            </div>
        )
    }
}
export default Navbar
