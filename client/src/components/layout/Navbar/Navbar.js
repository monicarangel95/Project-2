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
                <nav className="nav-wrapper black z-depth-5">
                    <div className="container">
                        <a href="/" className="brand-logo"><strong>Spot-A-Show</strong></a>
                        <a href="/" className="sidenav-trigger" data-target="mobile-links">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="/">Home</a></li>
                            <li><a href="/events">Events</a></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/events">Events</a></li>
                </ul>
            </div>
        )
    }
}
export default Navbar
